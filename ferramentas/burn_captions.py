import os
import subprocess
import sys

# --- CONFIGURAÇÃO DE CAMINHOS ---
# Usando o mesmo caminho do FFmpeg que funcionou no outro script
ffmpeg_dir = r"C:\Users\Milionario2023\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin"
os.environ["PATH"] += os.pathsep + ffmpeg_dir
ffmpeg_exe = os.path.join(ffmpeg_dir, "ffmpeg.exe")

# Nomes dos arquivos
input_video = "receita bolo(1).mp4"
input_vtt = "captions.vtt"
output_video = "video_com_legenda.mp4"

def burn_subtitles():
    print("--- INICIANDO GRAVAÇÃO DE LEGENDA (BURN-IN) ---")
    
    if not os.path.exists(input_video):
        print(f"ERRO: Vídeo '{input_video}' não encontrado.")
        return
    if not os.path.exists(input_vtt):
        print(f"ERRO: Legenda '{input_vtt}' não encontrada. Rode o auto_transcribe.py primeiro.")
        return

    # Ajustando caminho da legenda para formato que o FFmpeg aceita no filtro (escapando caracteres)
    # No Windows, caminhos absolutos no filtro de legenda podem ser chatos, 
    # mas como está tudo na mesma pasta, usar apenas o nome do arquivo costuma funcionar.
    
    # Comando FFmpeg:
    # -i input.mp4     = arquivo de entrada
    # -vf subtitles=... = filtro de vídeo para desenhar as legendas
    # -c:a copy        = copia o áudio sem reconverter (mais rápido)
    # output.mp4       = arquivo de saída
    
    # Estilo opcional: ForceStyle='FontName=Arial,FontSize=24' pode ser adicionado
    # Mas o padrão do VTT geralmente é suficiente. Vamos usar o padrão.
    
    cmd = [
        ffmpeg_exe,
        "-y", # Sobrescrever saída se existir
        "-i", input_video,
        "-vf", f"subtitles={input_vtt}:force_style='FontName=Arial,FontSize=20,PrimaryColour=&H00FFFF&,OutlineColour=&H000000&,BorderStyle=1,Outline=1,Shadow=0,MarginV=20'",
        "-c:a", "copy",
        output_video
    ]
    
    print(f"Processando... isso pode levar alguns segundos/minutos dependendo do tamanho do vídeo.")
    print(f"Comando: {' '.join(cmd)}")
    
    try:
        subprocess.run(cmd, check=True)
        print(f"\nSUCESSO! O vídeo final foi salvo como: {output_video}")
    except subprocess.CalledProcessError as e:
        print(f"\nERRO ao processar o vídeo: {e}")
    except Exception as e:
        print(f"\nERRO inesperado: {e}")

if __name__ == "__main__":
    burn_subtitles()
