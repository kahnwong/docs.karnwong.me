---
title: Git
slug: /
---

## Usage
```bash
# set a commit as HEAD
git reset --hard <commit_id>

# set global config
$ git config --global user.name NAME
$ git config --global user.email EMAIL

# ignore file mode changes
git config core.fileMode false

# create local branch from remote branch
git checkout -b test <name of remote>/test

# force push
git push origin <your_branch_name> --force

# visualize lineage
git log --graph --oneline --all

# compare tips of different branches
git diff branch1..branch2

# ignore whitespace
git diff -w

# update submodule
git submodule foreach git pull origin master

# remove some commits in-between
## https://stackoverflow.com/questions/51249344/deleting-commits-with-git-rebase
## Assuming the structure of your repo is like this (the letters denote commits)
#### X - Y - A - B - Z    (<--dev)
### the current branch points to Z and you want to get rid of commits A and B (and make Z a child of Y), the Git command you are looking for is:
git rebase --onto Y B

git fsck # Verifies the connectivity and validity of the objects in the database
```

## Recipes
### List untracked files
`git status --ignored` OR `git clean -ndX`

```bash
$ git help clean

git-clean - Remove untracked files from the working tree
-n, --dry-run - Don't actually remove anything, just show what would be done.
-d - Remove untracked directories in addition to untracked files.
-X - Remove only files ignored by Git.
```

### Copy commits from one repo to another
https://stackoverflow.com/questions/37471740/how-to-copy-commits-from-one-git-repo-to-another

```bash
# add the old repo as a remote repository
git remote add oldrepo https://github.com/path/to/oldrepo

# get the old repo commits
git remote update

# examine the whole tree
git log --all --oneline --graph --decorate

# copy (cherry-pick) the commits from the old repo into your new local one
git cherry-pick sha-of-commit-one
git cherry-pick sha-of-commit-two
git cherry-pick sha-of-commit-three

# check your local repo is correct
git log

# send your new tree (repo state) to github
git push origin master

# remove the now-unneeded reference to oldrepo
git remote remove oldrepo
```

### Remove submodule
```
git rm -r the_submodule
rm -rf .git/modules/the_submodule
```

### get total additions and deletions on a given branch for an given author in git
```
git log --author=$USER --shortstat $BRANCH | \
awk '/^ [0-9]/ { f += $1; i += $4; d += $6 } \
END { printf("%d files changed, %d insertions(+), %d deletions(-)", f, i, d) }'
```

## GitHub Actions
```yaml
name: Deploy

on:
  push:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
```

### Create ENV for short SHA
```yaml
- name: Add SHORT_SHA to env
  run: echo "SHORT_SHA=`echo ${GITHUB_SHA::7}`" >> $GITHUB_ENV

- uses: appleboy/docker-ecr-action@master
  with:
    tags: latest,${{ env.SHORT_SHA }}
```

## Visualize
### gitinspector
Notes: use python3.7

```
$ npm i -g gitinspector
$ gitinspector -F html --timeline=TRUE > stats.html
```

or

`docker run --rm -v $(pwd):/repo felix/gitinspector:0.4.4 --format=html --timeline=TRUE > stats.html`

## GH CLI
### Delete repo alias
```bash
gh alias set repo-delete 'api -X DELETE "repos/$1"'
gh repo-delete vilmibm/deleteme
```
