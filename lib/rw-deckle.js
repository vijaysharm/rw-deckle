'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rw-deckle:launch': () => this.launch()
    }));
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  launch() {
    console.log(atom.workspace.getActiveTextEditor().getPath());
    var file = atom.workspace.getActiveTextEditor().getPath();
    const { exec } = require('child_process');
    var command = 'open -a Deckle ' + file;
    console.log(command);
    exec(command);
  }
};
