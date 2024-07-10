---
outline: deep
---

# Git

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

# squash last N commits
git rebase -i HEAD~N

# Verifies the connectivity and validity of the objects in the database
git fsck

# show staged changes
git diff --cached

# checkout file from another branch
git checkout $REVISION -- $FILENAME

# clone specific branch with only latest revision
git clone --depth <depth> -b <branch> <repo_url>

# check out empty worktree
git worktree add -b test3 --track master
```

### Submodule

```bash
# update submodule
git submodule foreach git pull origin master

# remove submodule: https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule
git rm <path-to-submodule>
rm -rf .git/modules/<path-to-submodule>
git config --remove-section submodule.<path-to-submodule>.
```

## Cookbook

### List untracked files

`git status --ignored` OR `git clean -ndX`

```bash
$ git help clean

git-clean - Remove untracked files from the working tree
-n, --dry-run - Don't actually remove anything, just show what would be done.
-d - Remove untracked directories in addition to untracked files.
-X - Remove only files ignored by Git.
```

### Get total additions and deletions on a given branch for an given author in git

```bash
git log --author=$USER --shortstat $BRANCH | \
awk '/^ [0-9]/ { f += $1; i += $4; d += $6 } \
END { printf("%d files changed, %d insertions(+), %d deletions(-)", f, i, d) }'
```

### Export git log to CSV

<https://git-scm.com/docs/pretty-formats>

```bash
echo sha, contributor, date, message > log.csv
git log --date=local --pretty=format:'%h, %an, %ad, "%s"' >> log.csv
```

## SSH signing on Windows

<https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement>

If still encounter issues, use git for windows installer and config openssh executable.

## Tools

- [git-summary](https://github.com/MirkoLedda/git-summary) - Summarizes multiple git repository status within a directory.
- [gource](https://gource.io/) - Software projects are displayed by Gource as an animated tree with the root directory of the project at its centre. Directories appear as branches with files as leaves. Developers can be seen working on the tree at the times they contributed to the project.
- [git-filter-repo](https://github.com/newren/git-filter-repo/) - Quickly rewrite git repository history (filter-branch replacement).
- [git-cliff](https://git-cliff.org/) - A highly customizable changelog generator ⛰️

### Visualize

Notes: use python3.7

```bash
docker run \
    --rm -v $(pwd):/repo \
    felix/gitinspector:0.4.4 \
    --format=html \
    --timeline=TRUE > stats.html
```

### Remove large files from git history

<https://stackoverflow.com/a/61602985>

```bash
wget https://raw.githubusercontent.com/newren/git-filter-repo/main/git-filter-repo

python3 git-filter-repo --analyze
python3 git-filter-repo --invert-paths --path-match $PATH
```

## Resources

### General

- [Oh Shit, Git!?!](https://ohshitgit.com)
- [GitHub Skills](https://skills.github.com/)
- [Every engineer should understand git reflog](https://graphite.dev/blog/every-engineer-should-understand-git-reflog)

### Development flow

- [Trunk Based Development](https://trunkbaseddevelopment.com)
- [Git Organized: A Better Git Flow](https://render.com/blog/git-organized-a-better-git-flow)

### Code Review

- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Tuple’s Pair Programming Guide](https://tuple.app/pair-programming-guide/)
