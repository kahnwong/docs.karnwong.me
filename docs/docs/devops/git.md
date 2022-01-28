---
title: Git
slug: /
---

### Resources
- [Git Explorer](https://gitexplorer.com)
- [Oh Shit, Git!?!](https://ohshitgit.com)
- [Trunk Based Development](https://trunkbaseddevelopment.com)


## Usage
```bash
# set a commit as HEAD
git reset --hard <commit_id>

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

# squash last N commits
git rebase -i HEAD~N

# Verifies the connectivity and validity of the objects in the database
git fsck
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

### Remove submodule
```bash
git rm -r the_submodule
rm -rf .git/modules/the_submodule
```

### get total additions and deletions on a given branch for an given author in git
```bash
git log --author=$USER --shortstat $BRANCH | \
awk '/^ [0-9]/ { f += $1; i += $4; d += $6 } \
END { printf("%d files changed, %d insertions(+), %d deletions(-)", f, i, d) }'
```

## Visualize
### gitinspector
Notes: use python3.7

```bash
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
