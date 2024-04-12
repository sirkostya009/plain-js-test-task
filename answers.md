1. B. Filtering (`where`) is usually done before aggregation (`group by`), and post-aggregation (`having`) filtering can only be
done after the aggregation itself.
2. A. `distinct` keyword is absent, and the query does not look erroneous either.
3. B. `distinct` keyword is present now.
4. B. Option A is missing the explanation for the `grade = 'C'` filtering.
5. A. `enrolled.grade IN ('A', 'B')` returns `true` if grade is either A or B.
6. D. `e1.sid = e2.sid AND e1.cid != e2.cid` looks for same students that have different course ids.
7. B.
8. A. You can omit the column declaration from `insert` statement.
9. C. Sid 53667 is not present in students table, which will result in database raising an error if the foreign key constraint
was set properly.
10. B. First query would just select all student names that have their appopriate relation mapped in students table, while the
second would just select all students, as `left join` does not filter out records that are not present in the joined table.
11. B.
12. C.
13. D.
14. C.
15. A. I... didn't know that before.
16. A. Never saw anyone update multiple tables at once goddamn.
17. E. `truncate` deletes all contents of the table whereas `delete` can be picky.
18. A. DB engine would simply not be able to properly create the table if data types are absent.
19. A. Like, this isn't even a SQL test question anymore but an English test one.
20. C. I mean you can do `=` if you want to.
21. A.
22. B. Column C only contains values that are present in column A, while A only contains unique ones.
23. A. Deleting the row `[2, 4]` with cascade would delete all rows that contain value 2 in column C, and then would also delete
the value in column A for any C column that contains 2.
24. A, B.
25. E. `truncate` and `delete` can be rolled back and `truncate` is DML.
26. C.
27. D.
28. E.
29. what
30. C. Why flex the whole `natural join` thing if you can use a more explicit `inner join` cuh...
31. what
32. 1 `'%a%'` selects all strings that contain a character 'a' in them.
33. A. An underscore represents a match for any character.
34. D. Syntax is incorrect.
35. A. Both queries effectively select second largest value.
36. A. `distinct`.
37. B. They may or may not give the same result. The provided example is arbitrary enough to permit such an outcome.
38. C. Bro is flexing `natural join`.
39. we be doing data science tests
40. B. Yeah no shit it will be slower on a table with a million of records.
41. B. I don't really understand the yap `explain` gave out but it seems that cost range values for the indexed table
are lower so I guess the indexed one after all.
42. C. Nah I mean I highly doubt they made an algorithm that looks for patterns in an indexed column, considering the
costs and shit it might as well do full scan.
43. C. Full scan, same shit as with 42 although I slightly doubt it.
44. A. `lag()` selects the previous column or null if not present and `lead()` select the next one, respectively.
45. D. All points seem to make sense.
46. A. Serial creates the sequence for auto-incrementing itself on any insertion that does not specify the value for it.
