import whisper
from datetime import timedelta
import os
import sys

# --- CONFIGURAÇÃO DE CAMINHOS (PATH) ---
# Adiciona o FFmpeg ao PATH temporariamente para este script funcionar
ffmpeg_path = r"C:\Users\Milionario2023\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin"
os.environ["PATH"] += os.pathsep + ffmpeg_path
# ---------------------------------------

# Check if video exists
video_file = "receita bolo(1).mp4"
if not os.path.exists(video_file):
    print(f"ERRO: Arquivo '{video_file}' não encontrado!")
    sys.exit(1)

def format_timestamp(seconds):
    td = timedelta(seconds=seconds)
    total_seconds = int(td.total_seconds())
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60
    secs = total_seconds % 60
    milliseconds = int(td.microseconds / 1000)
    return f"{hours:02}:{minutes:02}:{secs:02}.{milliseconds:03}"

def main():
    print("--- INICIANDO LEGENDA AUTOMÁTICA ---")
    print("1. Carregando modelo de Inteligência Artificial (isso baixa uns arquivos na primeira vez)...")
    
    try:
        # 'base' model is a good tradeoff for speed/accuracy. 'small' or 'medium' are better but slower.
        model = whisper.load_model("base")
    except Exception as e:
        print(f"ERRO ao carregar modelo: {e}")
        return

    print(f"2. Ouvindo o arquivo '{video_file}'...")
    try:
        result = model.transcribe(video_file, fp16=False) # fp16=False to avoid warnings on CPU
    except Exception as e:
        print(f"ERRO na transcrição: {e}")
        return

    print("3. Salvando arquivo de legendas...")
    vtt_filename = "captions.vtt"
    
    with open(vtt_filename, "w", encoding="utf-8") as vtt:
        vtt.write("WEBVTT\n\n")
        for segment in result["segments"]:
            start = format_timestamp(segment["start"])
            end = format_timestamp(segment["end"])
            text = segment["text"].strip()
            
            # Write to VTT file
            vtt.write(f"{start} --> {end}\n")
            vtt.write(f"{text}\n\n")
            
            # Print legacy progress to console
            print(f"[{start} -> {end}] {text}")

    print(f"\nSUCESSO! Legendas salvas em: {vtt_filename}")
    print("Agora abra o arquivo 'watch_video.html' para ver o resultado!")

if __name__ == "__main__":
    main()
