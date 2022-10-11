# Git Basics

## How do you create a new repository on GitHub?
    new repository > repository name > check "Add a README file" > create repository
## How do you copy a repository onto your local machine from GitHub?
    using the command **git clone <url SSH of the repo>**
## What is the default name of your remote connection?
    using the command **remote -v** you can check the default name of "origin" for a new repo. 

## Explain what origin is in git push origin main.
    is the directory we are pushing something into.

## Explain what main is in git push origin main.
    is the branch we are pushing something into.

## Explain the two-stage system that Git uses to save files.
    **git add <name-file>** is used to staged a file/directory turning it into a "commitable" file/directory. Then **git commit -m "message descriping the commit"** is used to commit the staged files/directorys.  

## How do you check the status of your current repository?
    using the command **git status**

## How do you add files to the staging area in git?
    using the command **git add <name-file>**

## How do you commit the files in the staging area and add a descriptive message?
    using the command **git commit -m "message descriping the commit"**

## How do you push your changes to your repository on GitHub?
    using the command **git push <directory-name, branch-name>

## How do you look at the history of your previous commits?
    using the command **git log** 