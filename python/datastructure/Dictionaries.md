Sure! Let's dive into the details of dictionaries in Python.

### What is a Dictionary?
A dictionary in Python is an unordered collection of key-value pairs. Each key is unique and maps to a value. Dictionaries are mutable, meaning you can change their content after creation. They are defined by enclosing key-value pairs in curly braces `{}`.

### Creating a Dictionary
You can create a dictionary by placing key-value pairs inside curly braces, separated by commas. Each key is separated from its value by a colon `:`.

#### Example:
```python
# Creating a dictionary
student = {'name': 'John', 'age': 25, 'courses': ['Math', 'Science']}
print(student)  # Output: {'name': 'John', 'age': 25, 'courses': ['Math', 'Science']}
```

### Accessing Values
You can access values in a dictionary using their keys.

#### Example:
```python
# Accessing values
print(student['name'])  # Output: John
print(student['courses'])  # Output: ['Math', 'Science']
```

### Modifying Values
Since dictionaries are mutable, you can change the value associated with a key.

#### Example:
```python
# Modifying a value
student['age'] = 26
print(student)  # Output: {'name': 'John', 'age': 26, 'courses': ['Math', 'Science']}
```

### Adding Key-Value Pairs
You can add new key-value pairs to a dictionary.

#### Example:
```python
# Adding a new key-value pair
student['grade'] = 'A'
print(student)  # Output: {'name': 'John', 'age': 26, 'courses': ['Math', 'Science'], 'grade': 'A'}
```

### Removing Key-Value Pairs
You can remove key-value pairs using methods like `del`, `pop()`, and `popitem()`.

#### Example:
```python
# Removing a key-value pair using del
del student['age']
print(student)  # Output: {'name': 'John', 'courses': ['Math', 'Science'], 'grade': 'A'}

# Removing a key-value pair using pop()
grade = student.pop('grade')
print(grade)  # Output: A
print(student)  # Output: {'name': 'John', 'courses': ['Math', 'Science']}

# Removing the last inserted key-value pair using popitem()
last_item = student.popitem()
print(last_item)  # Output: ('courses', ['Math', 'Science'])
print(student)  # Output: {'name': 'John'}
```

### Dictionary Methods
Dictionaries come with several built-in methods for various operations.

#### Example:
```python
# Creating a dictionary
student = {'name': 'John', 'age': 25, 'courses': ['Math', 'Science']}

# Getting all keys
keys = student.keys()
print(keys)  # Output: dict_keys(['name', 'age', 'courses'])

# Getting all values
values = student.values()
print(values)  # Output: dict_values(['John', 25, ['Math', 'Science']])

# Getting all key-value pairs
items = student.items()
print(items)  # Output: dict_items([('name', 'John'), ('age', 25), ('courses', ['Math', 'Science'])])

# Checking if a key exists
print('name' in student)  # Output: True

# Using get() to access a value
age = student.get('age')
print(age)  # Output: 25

# Using get() with a default value
grade = student.get('grade', 'N/A')
print(grade)  # Output: N/A
```

### Iterating Through a Dictionary
You can iterate through a dictionary using a for loop.

#### Example:
```python
# Iterating through keys
for key in student:
    print(key, student[key])

# Iterating through key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")
```

### Nested Dictionaries
Dictionaries can contain other dictionaries, creating nested structures.

#### Example:
```python
# Creating a nested dictionary
students = {
    'student1': {'name': 'John', 'age': 25},
    'student2': {'name': 'Jane', 'age': 22}
}

# Accessing nested dictionary values
print(students['student1']['name'])  # Output: John
print(students['student2']['age'])  # Output: 22
```

### Dictionary Comprehensions
Dictionary comprehensions provide a concise way to create dictionaries.

#### Example:
```python
# Creating a dictionary of squares
squares = {x: x**2 for x in range(5)}
print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

Dictionaries are incredibly versatile and powerful, making them one of the most commonly used data structures in Python¹²³.

If you have any specific questions or need further examples, feel free to ask!

Source: Conversation with Copilot, 17/8/2024
(1) Python Dictionaries - W3Schools. https://www.w3schools.com/python/python_dictionaries.asp.
(2) Dictionaries in Python – Real Python. https://realpython.com/python-dicts/.
(3) What Is a Dictionary in Python? (Video) – Real Python. https://realpython.com/lessons/dictionary-python/.
(4) Dictionaries in Python – PYnative. https://pynative.com/python-dictionaries/.