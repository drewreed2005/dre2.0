---
toc: true
comments: false
hide: true
layout: post
type: tangible
courses: { csa: {week: 25} }
title: Individual Seed Blog
comments: true
---

## This Week's Project Contributions

### Fixing JWT Not Sending

At the start of this week, once again, the JWT was not sending to the frontend. As we got into the debugging assignment, I decided to focus primarily on fixing this issue.

I go over all of the steps of the process in [this debugging issue](https://github.com/drewreed2005/dre2.0/issues/7), but in summary:
- Using debugging, I was able to confirm that all user data was detected and generated correctly when a call was made; this wasn't a preflight problem or a problem with the backend's code.
- It seemed that the only step that caused a problem was the frontend receiving the SET_COOKIE HTTP header in the request, which it ignored.
- I researched what could cause the header to not be accepted and researched teacher_portfolio's request options, and was able to get the cookie to send successfully with modified request options!

<img width="800px" src="{{site.baseurl}}/images/311056626-ea40c216-daa0-4ee2-a0fd-c432b22ed649.png">

Please see the debugging issue for more details!

In [this commit](https://github.com/John-sCC/jcc_frontend/commit/d07f12a099c6724a003acf274dbdc2cc87928e7b), I was able to get the JWT to send consistently with the backend locally. Right now, the deployed backend is having a problem with CORS that I'm working on fixing.

Speaking of deployed backend...

### Backend Deployment

After fixing the JWT, I re-deployed the backend! [Click here](https://jcc.stu.nighthawkcodingsociety.com/) to see it.

I made some additional modifications to the frontend (as you can see) so that it would fit our new group theme and be very distinct.

## Info for Seed

### 3.0/3.0

- Exceptional achievement.  93% or better in last trimester of CompSci.

<img width="700" src="{{site.baseurl}}/images/Screen Shot 2024-03-08 at 9.14.11 AM.png">

- Exemplar in Team work.  Fosters community of learning beyond individual or single friend.
     - See [individual contributions on ticket](https://github.com/John-sCC/jcc_frontend/issues/29)
        - As Scrum Master of my period, both team members had valuable contributions to show.
     - See [Scrum Board](https://github.com/orgs/John-sCC/projects/1/views/1) involvement.
- Completion of 2.7 items.
     - See below.

### 2.7/3.0

- Individual Progress. Individual maintains an at-a-glance. AP preparation progress, Key commits, GitHub Analytics, etc.  They use this blog to start each individual review.
    - [My About Page (at a glance)](https://drewreed2005.github.io/dre2.0/about/)
- GitHub Pages Blog.  Student makes quality effort to record histories and solicit comments on AP, Project work.
    - [Earlier Timebox](https://drewreed2005.github.io/dre2/csa)
    - [Later Timebox](https://drewreed2005.github.io/dre2.0/AA_csa.html)
- AP work. All AP work is understood, reviewed, and is determined by Teacher to be your own work.  Student should be proactive in demonstrating understanding.
    - [AP FRQ Links, Connections and Grading](https://github.com/drewreed2005/dre2.0/issues/5)
    - [Trimester 2 Lesson Blogs and Grades](https://github.com/drewreed2005/dre2.0/issues/1)
    - [Trimester 1 AP MCQ](https://drewreed2005.github.io/dre2//2023/11/03/CB_Quiz_Tri_1.html)
    - [Trimester 1 Lesson Grades](https://drewreed2005.github.io/dre2//2023/11/03/Student_Scores_Tri_1.html)
- Project work. Student follows team requirements and expectations. They are active in the Scrum work and timelines.
    - [Frontend Contributions](https://github.com/John-sCC/jcc_frontend/graphs/contributors)
    - [Backend Contributions](https://github.com/John-sCC/jcc_backend/graphs/contributors)
    - [Scrum Board](https://github.com/orgs/John-sCC/projects/1/views/1)
    - See [individual contributions on ticket](https://github.com/John-sCC/jcc_frontend/issues/29)