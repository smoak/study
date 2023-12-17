# GPA
Given a set of letter grades, output the GPA (grade point average) of those grades.

## Key

```
A = 4 grade points
A- = 3.7
B+ = 3.3
B = 3
B- = 2.7
C+ = 2.3
C = 2
C- = 1.7
D+ = 1.3
D = 1
D- = 0.7
F = 0
```

**Example 1**

```js
calculateGPA(['A']) === 4
```

**Example 2**

```js
calculateGPA(['F', 'F', 'F']) === 0
```

**Example 3**

```js
calculateGPA(['A', 'A-', 'B+', 'B', 'B-']) === 3.3
```

**Example 4**

```js
calculateGPA(['A', 'B+', 'C-', 'A']) === 3.3
```