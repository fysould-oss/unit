"""Launcher simples: abre o site solicitado ou páginas oficiais de download."""

import webbrowser


LINKS = {
    "site": "https://israellucania.com.br/",
    "opera": "https://www.opera.com/download",
    "xampp": "https://www.apachefriends.org/download.html",
}


def main() -> None:
    try:
        print("Launcher seguro")
        print("1. Abrir o site")
        print("2. Página oficial de download do Opera")
        print("3. Página oficial de download do XAMPP")
        opcao = input("Escolha uma opção (1-3): ").strip()

        destino = {"1": "site", "2": "opera", "3": "xampp"}.get(opcao)
        if destino is None:
            print("Opção inválida.")
            return

        # Abre apenas uma página no navegador padrão; downloads e instalações
        # permanecem sob controle do usuário.
        abriu = webbrowser.open(LINKS[destino], new=2)
        if not abriu:
            print(f"Não foi possível abrir o navegador. Acesse: {LINKS[destino]}")
    finally:
        input("\nPressione Enter para fechar esta janela...")


if __name__ == "__main__":
    main()
