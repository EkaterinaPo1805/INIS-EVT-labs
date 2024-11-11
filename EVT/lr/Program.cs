using System;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine("Выберите метод шифрования:");
            Console.WriteLine("1. Шифр Цезаря");
            Console.WriteLine("2. Шифр простой замены");
            Console.WriteLine("3. Шифр Виженера");
            Console.WriteLine("4. Шифр простой перестановки");
            Console.WriteLine("5. Шифр усложненной перестановки");
            Console.WriteLine("0. Выход");
            int choice = int.Parse(Console.ReadLine());

            if (choice == 0)
            {
                break;
            }

            Console.WriteLine("Введите текст:");
            string input = Console.ReadLine().ToUpper();

            switch (choice)
            {
                case 1:
                    CaesarCipher(input);
                    break;
                case 2:
                    SimpleSubstitutionCipher(input);
                    break;
                case 3:
                    VigenereCipher(input);
                    break;
                case 4:
                    SimpleTranspositionCipher(input);
                    break;
                case 5:
                    ComplexTranspositionCipher(input);
                    break;
                default:
                    Console.WriteLine("Неверный выбор.");
                    break;
            }
        }
    }

    // Шифр Цезаря
    static void CaesarCipher(string text)
    {
        Console.WriteLine("1. Расшифровка");
        Console.WriteLine("2. Зашифровка");
        int choice = int.Parse(Console.ReadLine());
        Console.WriteLine("Введите ключ (сдвиг):");
        int shift = int.Parse(Console.ReadLine());

        StringBuilder result = new StringBuilder();
        switch (choice)
        {
            case 1:
                foreach (char c in text)
                {
                    if (char.IsLetter(c))
                    {
                        result.Append((char)(c - shift));
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Расшифрованный текст: " + result.ToString());
                break;
            case 2:
                foreach (char c in text)
                {
                    if (char.IsLetter(c))
                    {
                        result.Append((char)(c + shift));
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Зашифрованный текст: " + result.ToString());
                break;
        }
    }

    // Шифр простой замены
    static void SimpleSubstitutionCipher(string text)
    {
        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string key = "XFQABOLYWJGPMRVIHUSDZKNTEC";

        Console.WriteLine("1. Расшифровка");
        Console.WriteLine("2. Зашифровка");
        int choice = int.Parse(Console.ReadLine());

        StringBuilder result = new StringBuilder();
        switch (choice)
        {
            case 1:
                foreach (char c in text.ToUpper())
                {
                    if (key.Contains(c))
                    {
                        int index = key.IndexOf(c);
                        result.Append(alphabet[index]);
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Расшифрованный текст: " + result.ToString());
                break;
            case 2:
                foreach (char c in text.ToUpper())
                {
                    if (alphabet.Contains(c))
                    {
                        int index = alphabet.IndexOf(c);
                        result.Append(key[index]);
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Зашифрованный текст: " + result.ToString());
                break;
        }
    }

    // Шифр Виженера
    static void VigenereCipher(string text)
    {
        Console.WriteLine("1. Расшифровка");
        Console.WriteLine("2. Зашифровка");
        int choice = int.Parse(Console.ReadLine());
        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Console.WriteLine("Введите ключевое слово:");
        string key = Console.ReadLine().ToUpper();
        StringBuilder result = new StringBuilder();

        int keyIndex = 0;

        switch (choice)
        {
            case 1:
                foreach (char c in text)
                {
                    if (char.IsLetter(c))
                    {
                        int index1 = alphabet.IndexOf(c);
                        int index2 = alphabet.IndexOf(key[keyIndex]);
                        int shift = (index1 - index2 + 26) % 26;
                        result.Append((char)(alphabet[shift]));
                        if (keyIndex == key.Length - 1)
                            keyIndex = 0;
                        else
                            keyIndex++;
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Расшифрованный текст: " + result.ToString());
                break;
            case 2:
                foreach (char c in text)
                {
                    if (char.IsLetter(c))
                    {
                        int index1 = alphabet.IndexOf(c);
                        int index2 = alphabet.IndexOf(key[keyIndex]);
                        int shift = (index1 + index2) % 26;
                        result.Append((char)(alphabet[shift]));
                        if (keyIndex == key.Length - 1)
                            keyIndex = 0;
                        else
                            keyIndex++;
                    }
                    else
                    {
                        result.Append(c);
                    }
                }

                Console.WriteLine("Зашифрованный текст: " + result.ToString());
                break;
        }
    }

    // Шифр простой перестановки
    static void SimpleTranspositionCipher(string text)
    {
        Console.WriteLine("1. Расшифровка");
        Console.WriteLine("2. Зашифровка");
        int choice = int.Parse(Console.ReadLine());
        StringBuilder result = new StringBuilder();
        Console.WriteLine("Введите порядок букв:");
        string key = Console.ReadLine();
        int index = 0;
        switch (choice)
        {
            case 1:
                foreach (char c in key)
                {
                    int i = key[index] - '1';
                    result.Append(text[i]);
                    index++;
                }
                Console.WriteLine("Расшифрованный текст: " + result.ToString());
                break;
            case 2:
                foreach (char c in key)
                {
                    int i = key[index] - '1';
                    result.Append(text[i]);
                    index++;
                }
                Console.WriteLine("Зашифрованный текст: " + result.ToString());
                break;
        }
    }

    // Шифр усложненной перестановки
    static void ComplexTranspositionCipher(string text)
    {
        Console.WriteLine("1. Расшифровка");
        Console.WriteLine("2. Зашифровка");
        int choice = int.Parse(Console.ReadLine());
        StringBuilder result = new StringBuilder();
        int rows = 3;
        int cols = 4;
        Console.WriteLine("Введите строки по порядку:");
        string key1 = Console.ReadLine();
        Console.WriteLine("Введите столбцы по порядку:");
        string key2 = Console.ReadLine();

        char[,] grid = new char[rows, cols];
        int index = 0;

        switch (choice)
        {
            case 1:
                foreach (char с in key1)
                {
                    int row = с - '1';
                    for (int col = 0; col < cols; col++)
                    {
                        if (index < text.Length)
                        {
                            grid[row, col] = text[index++];
                        }
                        else
                        {
                            grid[row, col] = ' ';
                        }
                    }
                }

                foreach (char с in key2)
                {
                    int col = с - '1';
                    for (int row = 0; row < rows; row++)
                    {
                        result.Append(grid[row, col]);
                    }
                }

                Console.WriteLine("Расшифрованный текст:");
                Console.WriteLine(result.ToString());
                break;
            case 2:
                foreach (char c in key2)
                {
                    int col = c - '1';
                    for (int row = 0; row < rows; row++)
                    {
                        if (index < text.Length)
                        {
                            grid[row, col] = text[index++];
                        }
                    }
                }

                foreach (char c in key1)
                {
                    int row = c - '1';
                    for (int col = 0; col < cols; col++)
                    {
                        result.Append(grid[row, col]);
                    }
                }
                Console.WriteLine("Расшифрованный текст:");
                Console.WriteLine(result.ToString());
                break;
        }
    }
}
