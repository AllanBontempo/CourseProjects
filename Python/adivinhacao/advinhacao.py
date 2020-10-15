import random

print("***********************************")
print("Bem vindos ao jogo de adivinhação")
print("***********************************\n")

numero_secreto = random.randrange(1,101)
total_tentativas = 3
rodada = 1

for rodada in range(1, total_tentativas +1):
    print("Tentativa {} de {}".format(rodada, total_tentativas))

    chute_str = input("Digite um número maior que 100 e menor que 1:")
    print("\n")
    print("Você digitou:", chute_str)
    chute = int(chute_str)
    if (chute < 1 or chute > 100):
        print("Número digitado inválido!")
        continue

    acertou     = chute == numero_secreto
    chute_menor = chute < numero_secreto
    chute_maior = chute > numero_secreto

    if (acertou):
        print("Você acertou!")
        break
    elif (chute_menor):
        print("Você errou! Você chutou um número menor que o número secreto!\n")
    elif (chute_maior):
        print("Você errou! Você chutou um número maior que o número secreto!\n")


print("Fim do jogo")

    