var vscode = require('vscode');
var copy = require('copy-paste').copy;

function activate(context) {
	var disposable = vscode.commands.registerCommand('putFileDEV', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --put "${path}" $SALON_DEV`);
	});

	var disposable2 = vscode.commands.registerCommand('putFileTST', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --put "${path}" $SALON_TST`);
	});

	var disposable3 = vscode.commands.registerCommand('putFilePRD', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --put "${path}" $SALON_PRD`);
	});

	var disposable4 = vscode.commands.registerCommand('putAllDirectoryDEV', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --putAll "${path}" $SALON_DEV`);
	});

	var disposable5 = vscode.commands.registerCommand('putAllDirectoryTST', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --putAll "${path}" $SALON_TST`);
	});

	var disposable6 = vscode.commands.registerCommand('putAllDirectoryPRD', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(`dcu --putAll "${path}" $SALON_PRD`);
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);
	context.subscriptions.push(disposable6);
}
exports.activate = activate;


function deactivate() {
}
exports.deactivate = deactivate;