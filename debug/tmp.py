from itertools import count
import string
import random
#count

c = "["

for l in string.punctuation:
    c += f'"{l}", '

c += "]"

print(c)