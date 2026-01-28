// Lab Exercise 3: File Synchronization Tool
// Develop a utility that compares two directories and synchronizes files between them, handling
// errors gracefully.

const fs=require('fs');
const path=require('path');
const util=require('util');

const readdir=util