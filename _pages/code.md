---
title: Config 
layout: post
---

## Dotfiles

All dotfiles containing my config can be found at my [dotfiles](https://github.com/codetalker7/dotfiles){:target="\_blank"} repository. Feel free to go through it! I use [`yadm`](https://yadm.io/docs/overview){:target="\_blank"} to maintain my configuration, so it should be straightforward to reproduce it. My old configuration lives in the `old-dotfiles` branch of the repository.

> ##### `dotfiles` always contains the most recent information. 
>
> If you want to look at the most recent configuration I use, the best way is to simply look at the `dotfiles` repository. Although this page describes a lot of it, it doesn't contain everything. Also, I release specific snapshots of what I consider to be the most stable versions of my config. Check that out in the [`Releases`](https://github.com/codetalker7/dotfiles/releases) section.
{: .block-tip }


## OS and Desktop Environment

- **OS**: I recommend [Ubuntu](https://ubuntu.com/){:target="\_blank"} (currently I'm using [Jammy Jellyfish](https://releases.ubuntu.com/jammy/){:target="\_blank"}). Ubuntu is well-maintained, easy to use and also really easy to set-up as well (dual-booting a Windows machine with Ubuntu distributions is easy). [Pop!OS](https://pop.system76.com/){:target="\_blank"} is another distribution I recommend.

- **DE**: I recommend [Xfce](https://xfce.org/){:target="\_blank"}. It's extremely efficient on the hardware, and has a really simple interface. [KDE Plasma](https://kde.org/plasma-desktop/){:target="\_blank"} is another great choice.

## Window Manager

I use the [`i3`](https://i3wm.org/){:target="\_blank"} window manager. I use it as a standalone WM and not as a part of Xfce. This is so that I can switch between `i3` and `xfce4-wm` if someone not used to tiling WMs wants to use my machine.

## Terminal Emulator

Almost any emulator will work just fine; I use [Alacritty](https://github.com/alacritty/alacritty){:target="\_blank"}. It can be configured easily (see my [config](https://github.com/codetalker7/dotfiles/blob/main/.config/alacritty/alacritty.yml){:target="\_blank"}). I use the [dracula](https://draculatheme.com/alacritty){:target="\_blank"} theme.

## The shell

I use [fish](https://fishshell.com/){:target="\_blank"}, along with the [fisher](https://fishshell.com/){:target="\_blank"} plugin manager. I used to work with [`zsh`](https://www.zsh.org){:target="\_blank"} (you can find my configuration in the `old-dotfiles` branch). To render glyphs and other icons, I use the [Ubuntu Mono Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/UbuntuMono){:target="\_blank"}.

## Terminal multiplexer

I use [tmux](https://github.com/tmux/tmux/wiki){:target="\_blank"} as my terminal multiplexer, with the [tpm](https://github.com/tmux-plugins/tpm){:target="\_blank"} plugin manager. I use a pretty standard config (please see the respective dotfile). The theme is configured with [tmux2k](https://github.com/2KAbhishek/tmux2k){:target="\_blank"}. Here are some important plugins which I use: 

- [tmux-yank](https://github.com/2KAbhishek/tmux2k){:target="\_blank"}, a nice copy-mode for tmux.
- [tmux-fzf-url](https://github.com/wfxr/tmux-fzf-url){:target="\_blank"}, to open urls from within tmux.
- [tmux-fingers](https://github.com/Morantron/tmux-fingers){:target="\_blank"}, a Vimium-like copy-paste plugin.

## Text editor

I use a heavily configured [`nvim`](https://github.com/latex-lsp/texlab){:target="\_blank"} setup. Please see [my full configuration](https://github.com/codetalker7/dotfiles/tree/main/.config/nvim){:target="\_blank"}. In particular, see the [list of plugins which I use](https://github.com/codetalker7/dotfiles/blob/main/.config/nvim/lua/plugins.lua){:target="\_blank"}. You can read about each plugin in it's respective repository (and do check them out, they make life really easy!). Here is a brief description of some of the plugins:

- `lazy.nvim`: a plugin manager. 
- `nvim-lspconfig`: some off-the-shelf LSP settings.
- `trouble.nvim`: code actions and other diagnostic information.
- `nvim-tree`: a tree-based navigator.
- `nvim-web-devicons`: icons for the navigator. Looks really good. Needs a Nerd font.
- `dashboard.nvim`: a nice start screen.
- `vim-slime`: a plugin used to send selections across tmux panes. One of the best plugins I've come across. This is needed if you have a REPL opened in another pane.
- `Comment.nvim`: a plugin to make commenting easy.
- `markdown-preview.nvim`: render Markdown in your favorite browser.
- `vim-fugitive`: a must-use `git` plugin.
- `telescope.nvim`: a fuzzy-finder within `nvim`. Really helpful to search through large codebases.
- `vimtex`: a must-have if you typeset notes in LaTeX.
- `vim-arsync`: syncronize directories between a local and a remote machine. Extremely useful if you have to develop remotely.

## Must have utilities

There are a bunch of must-haves which I highly recommend:

- [`fzf`](https://github.com/junegunn/fzf){:target="\_blank"}, a must have tool if you're a Linux user. The idea is simple: it takes in a list from `STDIN` and writes to `STDOUT`. The power comes in the use cases it supports.
- [`bat`](https://github.com/sharkdp/bat){:target="\_blank"}; can be thought of as a modern version of `cat`. 
- [`colorls`](https://github.com/athityakumar/colorls){:target="\_blank"}, a Ruby gem to beautify the `ls` command with colors and icons.
- [`ripgrep`](https://github.com/BurntSushi/ripgrep){:target="\_blank"}: this is needed for `telescope.nvim` (which I discussed above).
- [`tldr`](https://tldr.sh/){:target="\_blank"} pages, can be thought of as a friendlier `man`. Try doing `tldr fzf`. Use this first to get a hang of the command before using `man`.
- [`rclone`](https://rclone.org/){:target="\_blank"}. I highly recommend this tool. It's essentially `rsync`, but for cloud storage. Supports a lot of cloud providers.
- [`syncthing`](https://syncthing.net/){:target="\_blank"}, if you want to sync data across different devices you use (like laptops, a remote server, or your phone/tablet).
- [`git-secret`](https://sobolevn.me/git-secret/){:target="\_blank"}. This uses your GPG key to encrypt sensitive data, which you can then push to your repository. Highly recommended if you want to version-control sensitive data.
- [`htop`](https://htop.dev/){:target="\_blank"} for CPU processes and [`nvtop`](https://github.com/Syllo/nvtop){:target="\_blank"} for GPU processes. Use these for monitoring system resources. These are much better than the standard `top` and `nvidia-smi`.

> ##### Never push sensitive data to cloud storage. 
>
> Make sure not to push any sensitive data (like passwords, token IDs, private keys) to any cloud storage, or even [private repositories](https://www.techradar.com/news/microsoft-github-account-reportedly-hit-in-huge-cyberattack){:target="\_blank"}. It's better to save encrypted versions of sensitive data instead; but even in that case, make sure to never make the encryption key public! 
{: .block-danger }

## Browser

I use [Brave](https://brave.com/){:target="\_blank"} and [Firefox](https://www.mozilla.org/en-US/firefox/){:target="\_blank"}. To get the most efficient and the best browsing experience, I also prefer Vim-like key bindings on my browser. For Chromium-based browsers, I prefer [Vimium](https://vimium.github.io/){:target="\_blank"}. If you use Firefox, you can use something like [Tridactyl](https://github.com/tridactyl/tridactyl){:target="\_blank"}. There are other extensions as well (just a quick search away).

## Image Viewer

[`feh`](https://feh.finalrewind.org/){:target="\_blank"} is a nice and efficient tool for this. However, it doesn't have support for GIFs. I prefer GNOME's [`eog`](https://help.gnome.org/users/eog/stable/){:target="\_blank"}.

## Typesetting

I regularly typeset any notes that I take while attending classes or self-studying math/computer science/code. I primarily use three approaches to typeset notes, depending upon the usecase.

1. For immediate use and online collaboration (with cloud storage), [Overleaf](https://www.overleaf.com/){:target="\_blank"} is the best option.

2. For note taking in Markdown (`.md` files, which can be rendered using your favorite text editor, or a browser), I use the following tools: 
    - [`pandoc`](https://pandoc.org/){:target="\_blank"}, used to convert from one markup format to another. This is a really helpful tool, because it has `pdflatex`, `xelatex` and `lualatex` support for `markdown`.
    - To watch the files as I'm editing them, I use [`docwatch`](https://github.com/elcorto/docwatch){:target="\_blank"}, which has support for [`pandoc`](https://pandoc.org/){:target="\_blank"} by default. Though other tools can be used for this. Find out more information about this at [this repository](https://github.com/codetalker7/notes-template){:target="\_blank"}.
    - This option is really good for live note-taking (ex., in a lecture).

3. However, it's best to just get your own TeX distribution. [I covered this in step 5 of this README](https://github.com/codetalker7/dotfiles/tree/old-dotfiles?tab=readme-ov-file#latex-installation-and-setup){:target="\_blank"}. I use [`zathura`](https://pwmt.org/projects/zathura/installation/){:target="\_blank"} as my PDF viewer, along with [`latexmk`](https://mg.readthedocs.io/latexmk.html#){:target="\_blank"} (it's like a `make` for LaTeX projects). To complement these tools, I also use the [vimtex](https://github.com/lervag/vimtex?tab=readme-ov-file){:target="\_blank"} plugin for my `nvim` configuration, along with the [texlab](https://github.com/latex-lsp/texlab){:target="\_blank"} LSP.

## Document and bibliography management

[Check out my blogpost on this]({{ site.baseurl }}{% link _posts/2024-07-07-obsidian.md %}).
