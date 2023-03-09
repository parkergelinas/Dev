#include <iostream>

int main() {
  double pesos, reais, soles, cad, franc;
  double dollars;
  // 1 Colombian Peso = 0.00021 USD
  // 1 Brazillian Real = 0.19 USD
  // 1 Peruvian Peso = 0.26 USD
  // 1 Canadian Dollar = 0.72 USD
  // 1 Swiss Franc = 1.07 USD


  std::cout << "Enter the number of Colombian Pesos: ";
  std::cin >> pesos;
  std::cout << "Enter the number of Brazillian Reais: ";
  std::cin >> reais;
  std::cout << "Enter the number of Peruvian Soles: ";
  std::cin >> soles;
  std::cout << "Enter the number of Canadian Dollars: ";
  std::cin >> cad;
  std::cout << "Enter the number of Swiss Francs: ";
  std::cin >> franc;

  dollars = (0.00021 * pesos) + (0.20 * reais) + (0.26 * soles) + (0.72 * cad) + (1.07 * franc);

  std::cout << "Total USD = $" << dollars << "\n";
}