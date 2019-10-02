const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

yargs.command(
  'add',
  'Add a new note',
  {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  () => {
    notes.addNote(yargs.argv.title, yargs.argv.body);
  }
)

yargs.command('remove', 'Remove a new note', () => {
    console.log('Removing a new note...');
  }
)

yargs.command('list', 'List all notes', () => {
    console.log('Listing all notes...');
  }
)

yargs.command('read', 'Read a note', () => {
    console.log('Reading a note...');
  }
)

yargs.parse();
