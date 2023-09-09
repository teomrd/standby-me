MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

.PHONY : install dev compile clean

install:
	yarn install

dev: install
	yarn start

compile: install
	yarn compile

lint:
	yarn lint

checks: compile lint
	echo "All good ✅"

clean:
	rm -rf ./node_modules
	rm -rf ./*lock*

build:
	eas build