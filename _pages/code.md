---
title: Config 
layout: post
---

## Dotfiles

All dotfiles containing my config can be found at my [dotfiles](https://github.com/codetalker7/dotfiles) repository. Feel free to go through it! I've included a bunch of (not-so-well-written) instructions on most of the things that I use, but this page describes things in more clearly.

## OS and Desktop Environment

- **OS**: I recommend [Ubuntu](https://ubuntu.com/) (currently I'm using [Jammy Jellyfish](https://releases.ubuntu.com/jammy/)). Ubuntu is well-maintained, easy to use and also really easy to set-up as well (dual-booting a Windows machine with Ubuntu distributions is easy). [Pop!OS](https://pop.system76.com/) is another distribution I recommend.

- **DE**: I recommend [Xfce](https://xfce.org/). It's extremely efficient on the hardware, and has a really simple interface. [KDE Plasma](https://kde.org/plasma-desktop/) is another great choice.

## Terminal Emulator

Almost any emulator will work just fine; I use [Alacritty](https://github.com/alacritty/alacritty). It can be configured easily (see my [config](https://github.com/codetalker7/dotfiles/blob/main/.config/alacritty/alacritty.yml)). I use the [dracula](https://draculatheme.com/alacritty) theme.

## The shell

I use [zsh](https://www.zsh.org/), configured with [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) with the [powerlevel10k](https://github.com/romkatv/powerlevel10k) theme (see my [p10k config](https://github.com/codetalker7/dotfiles/blob/main/.p10k.zsh)). To render glyphs and other icons, I use the [Ubuntu Mono Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/UbuntuMono). I also use some plugins, which make life easy: 
- `git`
- [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions){:target="\_blank"}, a very handy plugin which automatically displays suggestions as you're typing.
- [`zsh-syntax-highlighting`](https://github.com/zsh-users/zsh-syntax-highlighting){:target="\_blank"}, a cool plugin for syntax highlighting for commands.

## Terminal multiplexer

I use [tmux](https://github.com/tmux/tmux/wiki) as my terminal multiplexer, configured with [ohmytmux](https://github.com/gpakosz/.tmux). For details about how I've configured this along with my configuration files, please see step 3 of this [README](https://github.com/codetalker7/dotfiles?tab=readme-ov-file#steps-to-carry-out). I use the [dracula](https://github.com/atgmello/dracula.omt) theme for tmux.

## Text editor

I use a heavily configured [`nvim`](https://github.com/latex-lsp/texlab) setup. Please see [my full configuration](https://github.com/codetalker7/dotfiles/tree/main/.config/nvim). In particular, see the [list of plugins which I use](https://github.com/codetalker7/dotfiles/blob/main/.config/nvim/lua/plugins.lua). You can read about each plugin in it's respective repository (and do check them out, they make life really easy!). Here is a brief description of some of the plugins:

- `packer.nvim`: a plugin manager. 
- `nvim-lspconfig`: some off-the-shelf LSP settings.
- `trouble.nvim`: code actions and other diagnostic information.
- `nvim-tree`: a tree-based navigator.
- `nvim-web-devicons`: icons for the navigator. Looks really good. Needs a Nerd font.
- `vim-startify`: a nice start screen.
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
- [`ripgrep`](https://github.com/BurntSushi/ripgrep): this is needed for `telescope.nvim` (which I'll discuss below).

## Browser

I use [Brave](https://brave.com/) and [Firefox](https://www.mozilla.org/en-US/firefox/). To get the most efficient and the best browsing experience, I also prefer Vim-like key bindings on my browser. For Chromium-based browsers, I prefer [Vimium](https://vimium.github.io/). If you use Firefox, you can use something like [Tridactyl](https://github.com/tridactyl/tridactyl). There are other extensions as well (just a quick search away).

## Typesetting

I regularly typeset any notes that I take while attending classes or self-studying math/computer science/code. I primarily use three approaches to typeset notes, depending upon the usecase.

1. For immediate use and online collaboration (with cloud storage), [Overleaf](https://www.overleaf.com/) is the best option.

2. For note taking in Markdown (`.md` files, which can be rendered using your favorite text editor, or a browser), I use the following tools: 
    - [`pandoc`](https://pandoc.org/){:target="\_blank"}, used to convert from one markup format to another. This is a really helpful tool, because it has `pdflatex`, `xelatex` and `lualatex` support for `markdown`.
    - To watch the files as I'm editing them, I use [`docwatch`](https://github.com/elcorto/docwatch){:target="\_blank"}, which has support for [`pandoc`](https://pandoc.org/){:target="\_blank"} by default. Though other tools can be used for this. Find out more information about this at [this repository](https://github.com/codetalker7/notes-template){:target="\_blank"}.
    - This option is really good for live note-taking (ex., in a lecture).

3. However, it's best to just get your own TeX distribution. [I covered this in step 5 of this README](https://github.com/codetalker7/dotfiles?tab=readme-ov-file#latex-installation-and-setup). I use [`zathura`](https://pwmt.org/projects/zathura/installation/) as my PDF viewer, along with [`latexmk`](https://mg.readthedocs.io/latexmk.html#) (it's like a `make` for LaTeX projects). To complement these tools, I also use the [vimtex](https://github.com/lervag/vimtex?tab=readme-ov-file) plugin for my `nvim` configuration, along with the [texlab](https://github.com/latex-lsp/texlab) LSP.
