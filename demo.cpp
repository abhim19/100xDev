#include <iostream>
#include <string>
#include <algorithm> // For reverse
using namespace std;
class MyString
{
    string str;

public:
    MyString(string s) : str(s) {} // Overload ! operator to reverse the string
    MyString operator!()
    {
        string reversedStr = str;
        reverse(reversedStr.begin(), reversedStr.end()); // Reverse the string
        return MyString(reversedStr);
    }
    void display() const
    {
        cout << str << endl;
    }
};

int main()
{
    MyString s("Hello");
    MyString reversed = !s; // Reverses the string    reversed.display(); // Output: olleH
    return 0;
}
