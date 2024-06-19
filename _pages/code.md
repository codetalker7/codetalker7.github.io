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

## Must have utilities

There are a bunch of must-haves which I highly recommend:

- [`fzf`](https://github.com/junegunn/fzf){:target="\_blank"}, a must have tool if you're a Linux user. The idea is simple: it takes in a list from `STDIN` and writes to `STDOUT`. The power comes in the use cases it supports.
- [`bat`](https://github.com/sharkdp/bat){:target="\_blank"}; can be thought of as a modern version of `cat`. 
- [`colorls`](https://github.com/athityakumar/colorls){:target="\_blank"}, a Ruby gem to beautify the `ls` command with colors and icons.
- [`ripgrep`](https://github.com/BurntSushi/ripgrep): this is needed for `telescope.nvim` (which I'll discuss below).

## Typesetting

I regularly typeset any notes that I take while attending classes or self-studying math. Although [Overleaf](https://www.overleaf.com/project){:target="\_blank"} is great for this, it can be a bit inconvenient for taking notes in class. 

After following a bunch of tutorials/blogs on this, I've realized the the following is the fastest workflow for note taking (for me).

- [`pandoc`](https://pandoc.org/){:target="\_blank"}, used to convert from one markup format to another. This is a really helpful tool, because it has `pdflatex`, `xelatex` and `lualatex` support for `markdown`.

- To watch the files as I'm editing them, I use [`docwatch`](https://github.com/elcorto/docwatch){:target="\_blank"}, which has support for [`pandoc`](https://pandoc.org/){:target="\_blank"} by default. Though other tools can be used for this.

- These with [`vim`](https://www.vim.org/){:target="\_blank"} make a great combination. To get the best experience, I use the [`vim-pandoc`](https://github.com/vim-pandoc/vim-pandoc){:target="\_blank"} and [`vim-pandoc-syntax`](https://github.com/vim-pandoc/vim-pandoc-syntax){:target="\_blank"} for syntax highlighting along with the [UltiSnips](https://github.com/SirVer/ultisnips){:target="\_blank"} plugin for snippet support.

Find out more information about this at [this repository](https://github.com/codetalker7/notes-template){:target="\_blank"}.
