class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_to_int_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0

        for i in range(len(s)):
            if i < len(s) - 1 and roman_to_int_map[s[i]] < roman_to_int_map[s[i + 1]]:
                total -= roman_to_int_map[s[i]]
            else:
                total += roman_to_int_map[s[i]]

        return total

# Example usage
solution = Solution()
result = solution.romanToInt("MCMLXVI")
print(result)  # Expected output: 1994
