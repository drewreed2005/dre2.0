---
toc: true
comments: false
hide: true
layout: post
type: ccc
courses: { csa: {week: 17} }
title: College Board 2015 MCQ Reflection
---

## My Score

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 7.56.45 PM.png">

This is my first 100% score of the year for MCs. When I comes to my overall performance, though, I feel both good and bad about it.

According to the time shown on the College Board site, the test took me more than two hours to finish. In the actual test, we'll only have an hour and a half, so I'll need to cut that down. I'm not very concerned about it, though, since the majority of that extra time spent was either helping with a group/class task of some sort for a group member or listening to what someone had to say. The reason the time concerns me isn't because I don't think I could finish the test in an hour and a half, but because the fact that so much time was spent on outside distractions throughout the process means I didn't get a solid measurement of my actual performance on a true AP MC of this nature.

What I feel best about isn't necessarily just that I got 39/39, but that I didn't have to use outside help to figure out any of the problems. I did use outside resources to check my answers on three problems, but I had already selected my answers for them and, in two cases, I was only checking to make sure I had calculated the result correctly in an executional sense rather than a conceptual sense. I go into more detail in the sections below.

## Specific Question Reflections

Here are some problems that I was able to figure out by applying and reinforcing previous knowledge, with particular emphasis on problems that I found challenging in terms of execution. In a couple cases, I relearned information that I had forgotten about by taking on the problem.

### Q2 Print out table of - and asterisks

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.10.22 PM.png">

Time spent: 2:25

I included this question because it marks the start of spending quite a bit of time to figure out the output of a set of nested loops. This question's whole code segment is functionally useless and completely pointless, which was the case with most iterative problems. Each step was only present to cause confusion and, in many cases, there seemed to be direct decisions made to make walking through the loop process more difficult, both mentally and on paper (digial paper, though).

Unlike the other nested loop questions, this one is a bit shorter and easy to boil down to simple steps once you understand the two loops. The outer loop (`for (int r = 3; r > 0; r--)`) goes through 3, 2 and 1 before ending, and the two inner loops utilize `r` in opposing ways: `for (c = 1; c < r; c++)` prints "-" one fewer times than the value of `r` (two in first line, one in second, and none in the third) and `for (c = r; c <=3; c++)` prints as many "*" as `4 - r` (due to the `<=` with 3).

### Q3 A and B Classes with show method

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.19.26 PM.png">

Time spent: 1:07

I'm including this one because it uses Polymorphism in the same way that my group's mini-project did in the API controllers (see below):

```java
    /*
     * each of the methods in this array are initialized as their respective subclasses,
     * but the array stores each as the parent Fibonacci so that .calculate() can be called
    */
    Fibonacci[] methodArray = {goldenRatio, matrixExponentiation, forLoop, whileLoop, recursion, streamLoop};
    for (Fibonacci method : methodArray) {
        long result = method.calculate(id); // using the `calculate` method overwritten by the subclasses
        // ...
    }
```

### Q8 operation method on 2D int array

I skipped over four questions, Q4 through Q7, because they all required some clever thinking to solve, but no specifically concerning or difficult topics. Despite pretty much breezing through them, some of them have long durations measured, so I'm sure some excess time was added on to the total with those.

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.24.43 PM.png">

Time spent: 4:05

This was another question where the nested loops had me staring at the problem for longer than I should've. However, unlike that first one, this one added layers of complexity by using `j`, `r` and `c` in alternating ways as indexes to a 2D array. Once again, this was a problem where the result of the loop was functionally pointless, and I just needed to walk through each step individually to properly understand what the outcome would be.

This was one of the three problems that I checked my answer on for the sake of executional precision. I had selected the correct option initially by working through the problem step-by-step in my Notes app, but because I had spent so long doing it and still wasn't confident that I hadn't made a small executional mistake, I decided to take a minute to look it up.

### Q11 mystery method with String parameter and substring

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.43.50 PM.png">

Time spent: 1:26

This is one I wanted to include because it is one of the few examples of me relearning something I had forgotten about or never formally learned by taking on one of these questions. In this specific case, I didn't remember exactly how the Java `substring` method worked.

I confused myself for a moment by thinking there may have been some element of the length of the substring being an argument rather than the beginning index and the index at which to stop. I not only learned that the arguments specifically refer to that, but I also was able to clarify that the beginning index is included in the substring, but the ending index argument is NOT included in the resulting substring, since I saw that the first pass of the for loop had `str.length()` as the end index argument, which would usually cause an out of bounds exception.

### Q12 Compound Boolean expression with variable x and y

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.48.51 PM.png">

Time spent: 1:17

I'm learning a lot from this problem in hindsight. I found it very easy to deduce that it would always give false just by plugging in possible values for `x` and `y` and observing the outcome, but by looking at the explanation for the answer, I see that De Morgan's Law was also a factor in figuring out this question. I'm still very weak with De Morgan's Law, so this has prompted me to go back and rework the problem according to that way of thinking.

Distributing the `!` and changing the `||` to `&&`, I find that `!(x || y)` is equivalent to `!x && !y`. Since we know that both `x && y` and `!x && !y` must be true to return `true` here, we know that the output must always be false, since `x` and `y` must both be true to satisfy one side and must both be false to satisfy the other.

### Q13 mystery method with pairwise traversal of array

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.53.51 PM.png">

Time spent: 3:48

I'm only documenting this to show that these problems really did sometimes take me more time than others, even when focusing. I found the process of working through the iteration process more tedious than difficult.

### Q16 calculate method with 2D int array parameter

I skipped a couple questions that both had some good thinking involved, but were both not very challenging at all.

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.56.29 PM.png">

Time spent: 3:33

Despite still spending more than the ideal amount of time on this question, I found that I understood it much more and found it a lot less tedious to answer primarily because the looping process existed with a purpose. I don't know exactly why it took me so long to finish the question; I'd honestly speculate that I got distracted while answering it or something, since I know I was very confident about this one.

### Q18 Print statement with mathematical operators

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 9.58.58 PM.png">

Time spent: 3:38

I knew that, whether or not I got this one correct, I would include it in this reflection because there were multiple things at play that were tricky and made me doubt myself. This is one that I didn't check the answer to online, but I did discuss it with the people at my table to make sure I was thinking about it correctly.

The two main points of potential confusion were order of operations and integer division. I figured that the way they were expressed in the `println` statement made them considered integers, so dividing by 10 would make 404 into just 40, not 40.4. Since multiplication and division have the same order priority in the order of operations, I knew it would come next, turning 40 into 400. From there, I could just add the 1 for the answer, 401, and the fact that it was an option made me a lot more inclined to pick it. Being (mostly) reassured by my fellow coders was also encouraging.

### Q20 mystery with 1D int array and nested iteration

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.06.24 PM.png">

Time spent: 6:01

As the time implies, this one really got me thinking.

This was an example of a case where there really was a purpose to the whole looping process, but what exactly that purpose was ended up being the confusing part. Without paying attention to the incrementing `count` variable, it seemed more like the sort of method that would be used to find the highest value in an array, and the presence of bounds classified as `outer` and `inner` made it almost seem it could've been sorting in some way.

In hindsight, I think I definitely could have figured out what was going on faster if I had focused more, but at the same time, since I already know what the answer was, it's hard for me to say. Either way, I know I need to get better at following nested iterative processes in these problems.

### Q24 Adding overloaded method one to SomeClass

Skipping over a few problems that weren't too much trouble, including one that used my updated knowledge of the `substring` method...

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.12.21 PM.png">

Time spent: 4:47

I know this was one of the problems I completed after returning home from school since having started the MCQ in class, and it took me a while to notice what could possibly be wrong with the method declarations. This was a case where, instead of assuming that there was some element of the problem that I didn't understand, I should've looked closer at my answer choices: the method declaration `I.` clearly had a bad parameter (`public void one(int value)` vs. `public void one(int first)` in the original declaration), so all three of them wouldn't have been valid.

### Q26 Methods start and changeIt with aliases

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.18.59 PM.png">

Time spent: 10:26

THIS is definitely the question I was most interested in blogging about because I don't think variable scope and modification in other methods is necessarily something that anyone's lessons went over last trimester, but it turns out to be SO important in cases like this.

I was initially sure that variables entered as arguments to be mutated in a method like `changeIt` would be mutated because the method was called within the cope of those variables being defined, but the answer `0 0 0 0 0 0 black` felt far too obvious and made me doubt this.

I looked online to research the possible answer without directly looking at the answer to this specific question. I heard multiple conflicting things that both seemed to side with my response (`1 2 3 4 5 6 blackboard`), assuming the variables were not mutated as arguments to the `changeIt` method, and I was right.

Thanks to the College Board explanation, I can be sure of why: because new values were assigned to each of the parameters, the actual parameters were not affected by modifications. At the same time, it feels conflicting to hear that "copies of the actual parameters" are used to initialize the formal parameters. I want to ask about this during our reflection, since I find this concept somewhat confusing. If there was any problem I would've expected to get wrong for some reason, it was this one.

### Q27 Sorting 1D int array and 

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.30.08 PM.png">

Time spent: 4:22

This was an iteration one that gave me some trouble along with its counterpart, "Q28 Sorting 1D int array statement count".

The main reason that I wanted to cover it was because of the second part, but this first part felt like a situation where I was starting to get better at getting an overall sense for what the nested loops were functionally doing in order to tackle the problem. More than anything, it was manually going through three passes in notes and noting how it would affect the array that made it difficult, since it was specifically swapping values, so each individual numerical change after a pass had to be looked at carefully.

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.31.49 PM.png">

Time spent: 6:25

This one was a lot more tedious. Figuring out the amount of assignment was much easier, since I knew it would happen every time regardless of if a swap was made because `m` was initialized to be equal to `j` to accommodate this sort of relationship, and I only needed to see that the outer loop capped at `data.length - 1` to know it would happen 5 times.

The process of finding the number of comparisons was more tedius, since each pass had a differing number of comparisons. By then I noticed the pattern, so this wasn't as tedious as some other processes, but I ended up somewhat paranoid about my answer by the end. Despite that, I really don't think it's accurate to say that I spent a full 11 minutes working on both Q27 and Q28. If I was fully focused on these questions singularly, I think 5 minutes at most would be more accurate of an estimate.

### Q31 X and O board

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.39.38 PM.png">

Time spent: 23:19? (that can't be right, so I must've had to divert focus away from this problem for a while)

This is another iteration one that messed with my thought process a lot, but I don't want to dwell on it for too long and take away from other problems with more conceptual understanding to be discussed. Essentially, when I initially thought about it, I didn't notice that the column index was being incremented, and after figuring that out, I struggled to see the direct applications of the `while (col < 5 and row >= 0)` condition. I ended up checking my answer for this one because I was confused in the process, but in hindsight, I don't think I should've been that confused by the loop.

### Q35 Iterative binarySearch of 1D int array and Q36 Iterative binarySearch statement execution count

The questions between this and the last were slightly confusing because of the answer choices, but not enough that I felt the need to include them. I was confident in my answers to them.

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.43.53 PM.png">

Time spent: 4:41

Given how much trying to orient myself mentally with where the `start`, `end` and `mid` variables were at any point in the process, I'm surprised I spend less than 5 minutes on this question. I walked through it:
1. Start is 0, end is 7, so mid = (0 + 7) / 2 = 3 by integer division
2. Since the value is above the mid, the new start is 3 + 1 = 4
3. New mid is (4 + 7) / 2 = 5 by integer division
4. The value at index 5 is an 8, so the index 5 is returned

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 10.53.16 PM.png">

Time spent: 1:39

I only include this second part because, at first, I didn't even know how to approach it. I thought there was some formulaic way to figure it our related to time complexity (and upon further research, there is, based on binary search's logarithmic complexity), but I ended up just going through each step manually to figure it out.
1. 2000 elements
2. 1000 elements
3. 500 elements
4. 250 elements
5. 125 elements
6. 62 elements
7. 31 elements
8. 15 elements
9. 7 elements
10. 3 elements
11. 1 element

Even if these calculations were slightly off in terms of specifics, there was only one answer remotely close to 11, so it seemed to be the correct one.

### Q39 Consider the following code segment. Wh...

<img src="{{site.baseurl}}/images/CB_MCQ_2015/Screen Shot 2023-12-21 at 11.16.10 PM.png">

Time spent: 2:08

I learned another new thing from this question by noticing how the call was made. I didn't realize that the `set` method returned the element that was previously in place of where a new element was set, but given that it was put in a `println` and my answer was an option, I figured it must be. Now, I have that information to use later.

## Overall Reflection

### Glows

- I applied my knowledge of basic Java concepts to do some good problem solving without much confusion
- Despite not knowing the exact application of certain Java methods like `substring` and `set`, I was able to use context to learn more about problems
- When in situations involving info I wasn't confident in, including De Morgan's law, order of operations and mutating variables through parameters, I used context and hindsight to learn new things and take them into account
- I think I showed really strong understanding of class method behaviors with polymorphism
- I had no confusion related to Java syntax and expressions, and only very few troubles with Java methods

### Grows

- I could have worked through the MCQ is a more regular testing environment (no breaks, more focus, etc.) for better practice
- I could have focused more on problems with nested loops to not spend as much time for no good reason
- I could do better at reading all possible answers and parts to each question to ensure there's no needless confusion stemming from that
- I should focus specifically on looking at De Morgan's law and get some more practice applying knowledge of iteration and operations like integer division (to ensure muscle memory for the future)