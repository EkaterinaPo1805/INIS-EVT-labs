using System;
using System.Numerics;

class RSA
{
    // Функция для нахождения НОД
    public static BigInteger GCD(BigInteger a, BigInteger b)
    {
        while (b != 0)
        {
            BigInteger temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Функция для нахождения обратного элемента по модулю
    public static BigInteger ModInverse(BigInteger e, BigInteger phi)
    {
        BigInteger m0 = phi, t, q;
        BigInteger x0 = 0, x1 = 1;

        if (phi == 1)
            return 0;

        while (e > 1)
        {
            q = e / phi;
            t = phi;

            phi = e % phi;
            e = t;

            t = x0;
            x0 = x1 - q * x0;
            x1 = t;
        }

        if (x1 < 0)
            x1 += m0;

        return x1;
    }

    // Функция для шифрования сообщения
    public static BigInteger[] Encrypt(string message, BigInteger e, BigInteger n)
    {
        BigInteger[] encryptedMessage = new BigInteger[message.Length];
        for (int i = 0; i < message.Length; i++)
        {
            encryptedMessage[i] = BigInteger.ModPow(message[i] - 'A' + 1, e, n);
        }
        return encryptedMessage;
    }

    // Функция для дешифрования сообщения
    public static string Decrypt(BigInteger[] ciphertext, BigInteger d, BigInteger n)
    {
        char[] decryptedMessage = new char[ciphertext.Length];
        for (int i = 0; i < ciphertext.Length; i++)
        {
            decryptedMessage[i] = (char)(BigInteger.ModPow(ciphertext[i], d, n) + 'A' - 1);
        }
        return new string(decryptedMessage);
    }

    // Функция для проверки простоты числа (метод перебора)
    public static bool IsPrime(BigInteger num)
    {
        if (num <= 1) return false;
        if (num == 2 || num == 3) return true;

        for (BigInteger i = 2; i * i <= num; i++)
        {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    public static void Main(string[] args)
    {
        Console.Write("Введите простое число p: ");
        BigInteger p = BigInteger.Parse(Console.ReadLine());

        Console.Write("Введите простое число q: ");
        BigInteger q = BigInteger.Parse(Console.ReadLine());

        // Проверка на простоту
        if (!IsPrime(p) || !IsPrime(q))
        {
            Console.WriteLine("Одно или оба числа не являются простыми.");
            return;
        }

        // Вычисление n и Ф(n)
        BigInteger n = p * q;
        BigInteger phi = (p - 1) * (q - 1);

        // Ввод e
        Console.Write("Введите число e (должно быть взаимно простым с Ф(n)): ");
        BigInteger eInput = BigInteger.Parse(Console.ReadLine());

        // Проверка взаимной простоты e и Ф(n)
        if (GCD(eInput, phi) != 1)
        {
            Console.WriteLine("Число e должно быть взаимно простым с Ф(n).");
            return;
        }

        // Вычисление d
        BigInteger d = ModInverse(eInput, phi);

        // Ввод сообщения
        Console.Write("Введите сообщение (только заглавные буквы A-Z): ");
        string message = Console.ReadLine().ToUpper();

        // Шифрование
        BigInteger[] encryptedMessage = Encrypt(message, eInput, n);
        Console.WriteLine("Зашифрованное сообщение: ");
        foreach (var num in encryptedMessage)
        {
            Console.Write(num + " ");
        }
        Console.WriteLine();

        // Дешифрование
        string decryptedMessage = Decrypt(encryptedMessage, d, n);
        Console.WriteLine("Дешифрованное сообщение: " + decryptedMessage);
    }
}
