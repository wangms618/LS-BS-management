## git status
可以通过git status 查看文件的当前状态，简单介绍下每个状态：

1.Untracked：未纳入版本库中的文件，即未跟踪；

2.Unmodified：已纳入版本库的文件，未做修改；

3.Modified：已纳入版本库的文件，已修改；

4.Staged：添加到缓存区的文件；


# git log
git log  

查询记录最常用到，而且参数也非常多：

git log [<options>] [<since>..<until>] [[--] <path>...]

不加参数执行，会按提交时间列出所有的更新，最近一次更新排在最上面，列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。

## git reflog
查看历史提交记录，包括你没有更新的提交

有时历史记录那么多，怎么才能又快又精准找到呢？这里有太多参数可以供选择了：

 -p  用来详细显示每次提交的内容差异，显示与git diff 类似。
--stat   用来简略显示每次提交的统计信息，
--pretty  使用其他格式显示历史提交信息。
比如：git log --pretty=oneline ：将每个提交放在一行显示，查看的提交数很大时非常有用。可用的选项包括 short，medium，full，fuller ，email 和 format（后跟指定格式），展示的信息或多或少有些不同，自己可以动手实践一下看看效果如何。

--graph   显示 ASCII 图形表示的分支合并历史。一般结合oneline ，format使用时尤其有用，如查看分支提交记录：

git log --graph --pretty=oneline --abbrev-commit   
-n  仅显示最近的 n 条提交 ，其中的 n 可以是任何整数
--author 显示指定作者的提交
--grep  仅显示提交说明中含指定关键字的提交
--since / --after   仅显示指定时间之后的提交，如：git log --since “1 day ago”
--until / --before    仅显示指定时间之前的提交 如：git log --until “2018-2-1”
<path>  查看当前某些文件或目录的提交


# git reset
使用 git reset撤销

git reset --hard   HEAD~：  将本地仓库、暂存区、工作目录恢复到上一个版本（所有的修改将会失去）

git reset --mixed HEAD~：将本地仓库、暂存区恢复到上一个版本，工作目录保存着修改

git reset --soft HEAD~：将本地仓库、上一个版本，暂存区、工作目录保存着修改

git reset HEAD~2 <path>： 带文件路径，默认是--mixed，只将暂存区，路径path下的文件恢复到之前2个版本


git clone <url>   克隆远程仓库到本地
git remote  列出每个远程仓库的简短名字
git remote -v    列出每个远程仓库的简短名字与其对应的 URL
git remote show [remote-name]   查看某个远程仓库的详细信息
git remote rename [old name] [new name]  重命名远程仓库
git remote rm [remote-name]   移除某个远程仓库
git remote add <shortname> <url>  添加一个远程仓库
git fetch [remote-name]  从远程仓库数据拉取最新到本地，但不自动合并本地的修改
git  pull   [remote-name] [branch-name]  把远程仓库数据拉到本地，并自行合并
git pull 的魔法经常令人困惑所以通常单独显式地使用 fetch 与 merge 命令会更好一些。
git  push [remote-name] [branch-name]    把本地代码推送到远程仓库，一般先执行git pull、在执行git push  确保代码是最新的，不然会被拒绝。

***如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令：

git branch --set-upstream branch-name origin/branch-name

# git clone  
