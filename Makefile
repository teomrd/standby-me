MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

.PHONY : install dev clean

install:
	yarn install

dev: install
	yarn start

clean:
	rm -rf ./node_modules
	rm -rf ./*lock*