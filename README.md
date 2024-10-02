
# Rick and Morty Character Explorer

Rick and Morty Character Explorer to aplikacja webowa, która pozwala użytkownikom przeglądać postacie z serialu "Rick and Morty". Użytkownicy mogą filtrować postacie według płci, gatunku i statusu.

## Instalacja

Aby uruchomić ten projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:
    ```bash
    https://github.com/Just-Krzysztof/rick-and-morty.git
    cd rick-and-morty
    ```

2. Zainstaluj zależności:
    ```bash
    npm install
    ```

3. Uruchom aplikację:
    ```bash
    npm run dev
    ```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

## Struktura Projektu

### Główne Pliki i Katalogi

- `src/App.tsx`: Główny komponent aplikacji.
- `src/main.tsx`: Punkt wejścia aplikacji.
- `src/components/CharacterGrid.tsx`: Komponent wyświetlający siatkę postaci.
- `src/components/CharacterSelector.tsx`: Komponent do wyboru filtrów postaci.
- `src/components/CharacterCard.tsx`: Komponent wyświetlający pojedynczą kartę postaci.
- `src/components/CharacterCardContainer.tsx`: Kontener dla karty postaci.
- `src/hooks/useData.ts`: Hook do pobierania danych z API.
- `src/hooks/useCharacters.ts`: Hook do pobierania postaci z API.
- `src/hooks/useGenres.ts`: Hook do pobierania dostępnych filtrów (płci, gatunki, statusy).
- `src/services/api-client.ts`: Konfiguracja klienta API.
- `src/data/genres.ts`: Statyczne dane filtrów.

# Technologie

- React
- TypeScript
- Chakra UI
- Axios
- Vite

## Autor

[Krzysztof Just](https://www.linkedin.com/in/krzysztof-just-front-end-developer)

## Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT.