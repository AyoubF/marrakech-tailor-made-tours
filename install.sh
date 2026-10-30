#!/usr/bin/env bash
# Installs the Marrakech Tailor Made Tours skill for Claude Code.
set -e
REPO="https://github.com/AyoubF/marrakech-tailor-made-tours.git"
DEST="$HOME/.claude/skills/marrakech-tailor-made-tours"
TMP="$(mktemp -d)"
echo "Downloading Marrakech Tailor Made Tours skill..."
git clone --depth 1 -q "$REPO" "$TMP/repo"
mkdir -p "$HOME/.claude/skills"
rm -rf "$DEST"
cp -r "$TMP/repo/marrakech-tailor-made-tours" "$DEST"
rm -rf "$TMP"
echo "Installed to $DEST"
echo "Open Claude Code and type: help me plan a trip to Marrakech"
