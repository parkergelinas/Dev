#include <iostream>
#include <vector>
#include <string>
 
int main() {
 
  std::string input = "parker";

  std::vector<char> vowels;

  vowels.push_back('a');
  vowels.push_back('e');
  vowels.push_back('i');
  vowels.push_back('o');
  vowels.push_back('u');

  std::vector<char> whale_talk;
  
  for (int i = 0; i < input.size(); i++) {

    for (int j = 0; j < vowels.size(); j++) {

      if(input[i] == vowels[j]) {

        whale_talk.push_back(input[i]);

      }  if (input[i] == 'u' || input[i] == 'e') {
 
    whale_talk.push_back(input[i]);
  
      }
    }
  }
  for (int k = 0; k < whale_talk.size(); k++) {
        std::cout << whale_talk[k];
  }

  std::cout << "\n";
}