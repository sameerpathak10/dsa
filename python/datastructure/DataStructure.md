Absolutely! Let's dive into the details of each data structure in Python with examples:

### 1. Lists
Lists are ordered collections of items that can be of different types. They are mutable, meaning you can change their content.

#### Example:
```python
# Creating a list
fruits = ['apple', 'banana', 'cherry']

# Accessing elements
print(fruits[0])  # Output: apple

# Adding an element
fruits.append('date')

# Removing an element
fruits.remove('banana')

# Iterating through the list
for fruit in fruits:
    print(fruit)
```

### 2. Tuples
Tuples are similar to lists but are immutable, meaning their content cannot be changed after creation.

#### Example:
```python
# Creating a tuple
coordinates = (10, 20)

# Accessing elements
print(coordinates[0])  # Output: 10

# Tuples are immutable, so the following line would raise an error
# coordinates[0] = 15
```

### 3. Dictionaries
Dictionaries are unordered collections of key-value pairs. They are mutable and allow for fast retrieval of values based on keys.

#### Example:
```python
# Creating a dictionary
student = {'name': 'John', 'age': 25, 'courses': ['Math', 'Science']}

# Accessing values
print(student['name'])  # Output: John

# Adding a new key-value pair
student['grade'] = 'A'

# Removing a key-value pair
del student['age']

# Iterating through the dictionary
for key, value in student.items():
    print(f"{key}: {value}")
```

### 4. Sets
Sets are unordered collections of unique items. They are useful for membership testing and eliminating duplicate entries.

#### Example:
```python
# Creating a set
unique_numbers = {1, 2, 3, 4, 4, 5}

# Adding an element
unique_numbers.add(6)

# Removing an element
unique_numbers.remove(3)

# Iterating through the set
for number in unique_numbers:
    print(number)
```

### 5. Arrays (Using the `array` Module)
Arrays are similar to lists but can only store elements of the same type, making them more memory-efficient.

#### Example:
```python
import array

# Creating an array of integers
numbers = array.array('i', [1, 2, 3, 4, 5])

# Accessing elements
print(numbers[0])  # Output: 1

# Adding an element
numbers.append(6)

# Removing an element
numbers.remove(3)

# Iterating through the array
for number in numbers:
    print(number)
```

### 6. Deques (Using the `collections` Module)
Deques (double-ended queues) are optimized for fast appends and pops from both ends.

#### Example:
```python
from collections import deque

# Creating a deque
queue = deque(['a', 'b', 'c'])

# Adding elements to both ends
queue.append('d')
queue.appendleft('z')

# Removing elements from both ends
queue.pop()
queue.popleft()

# Iterating through the deque
for item in queue:
    print(item)
```

### 7. Named Tuples (Using the `collections` Module)
Named tuples are like regular tuples but with named fields, making them more readable.

#### Example:
```python
from collections import namedtuple

# Creating a named tuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)

# Accessing fields
print(p.x)  # Output: 10
print(p.y)  # Output: 20
```

### 8. Default Dictionaries (Using the `collections` Module)
Default dictionaries provide a default value for non-existent keys, avoiding key errors.

#### Example:
```python
from collections import defaultdict

# Creating a default dictionary with int as the default factory
dd = defaultdict(int)

# Accessing and modifying values
dd['a'] += 1
print(dd['a'])  # Output: 1
```

### 9. Ordered Dictionaries (Using the `collections` Module)
Ordered dictionaries remember the order in which items were inserted.

#### Example:
```python
from collections import OrderedDict

# Creating an ordered dictionary
od = OrderedDict()
od['a'] = 1
od['b'] = 2

# Iterating through the ordered dictionary
for key, value in od.items():
    print(f"{key}: {value}")
```

### 10. Heaps (Using the `heapq` Module)
Heaps are binary trees for which every parent node has a value less than or equal to any of its children. They are useful for implementing priority queues.

#### Example:
```python
import heapq

# Creating a heap
heap = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
heapq.heapify(heap)

# Adding an element to the heap
heapq.heappush(heap, -1)

# Removing the smallest element
smallest = heapq.heappop(heap)

# Iterating through the heap
for element in heap:
    print(element)
```

These examples should give you a comprehensive understanding of the various data structures available in Python. If you have any specific questions or need further details, feel free to ask!

Source: Conversation with Copilot, 17/8/2024
(1) Python data structure types and classes. https://bing.com/search?q=data+structures+in+python.
(2) 5. Data Structures — Python 3.12.5 documentation. https://docs.python.org/3/tutorial/datastructures.html.
(3) Python Data Structures - GeeksforGeeks. https://www.geeksforgeeks.org/python-data-structures/.
(4) What Are Python Data Structures? - Built In. https://builtin.com/data-science/python-data-structures.
(5) Python Data Structures: Lists, Dictionaries, Sets, Tuples (2023). https://www.dataquest.io/blog/data-structures-in-python/.
(6) 8 data structures every Python programmer needs to know - Educative. https://www.educative.io/blog/8-python-data-structures.