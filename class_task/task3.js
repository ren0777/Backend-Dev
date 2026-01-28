// Task 3 : Directory Backup & Cleanup Utility Scenario
// Your system stores user uploads. You must:
// Backup important files
// Delete old unused files automatically
// Tasks
// Create a Node.js utility that:Scans a directoryCopies files to a backup folder with timestampDeletes files older than 7 daysLogs all operations into backup.log

// Constraints
// Use fs.stat
// Handle missing directories safely
// Use promises / async-await

const fs = require('fs').promises;
const path = require('path');

const SOURCE_DIR = 'user_uploads';
const BACKUP_DIR = 'backup_folder';
const BACKUP_LOG = 'backup.log';
const DAYS_OLD = 7;

const MS_IN_DAY = 24 * 60 * 60 * 1000;

async function logOperation(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    await fs.appendFile(BACKUP_LOG, logMessage);
}

async function ensureDirectory(dirPath) {
    try {
        const stat = await fs.stat(dirPath);
        if (!stat.isDirectory()) {
            throw new Error(`Path exists but is not a directory: ${dirPath}`);
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(dirPath, { recursive: true });
        } else {
            throw err;
        }
    }
}

async function backupFile(filePath) {
    const fileName = path.basename(filePath);
    const parsed = path.parse(fileName);
    const timestampedName = `${parsed.name}_${Date.now()}${parsed.ext}`;
    const backupPath = path.join(BACKUP_DIR, timestampedName);
    await fs.copyFile(filePath, backupPath);
    await logOperation(`Backed up: ${fileName} -> ${timestampedName}`);
}

async function deleteIfOld(filePath, stats, cutoffTime) {
    if (stats.mtimeMs < cutoffTime) {
        const fileName = path.basename(filePath);
        await fs.unlink(filePath);
        await logOperation(`Deleted old file: ${fileName}`);
    }
}

async function backupAndCleanup() {
    try {
        await ensureDirectory(SOURCE_DIR);
        await ensureDirectory(BACKUP_DIR);

        const files = await fs.readdir(SOURCE_DIR);
        const cutoffTime = Date.now() - DAYS_OLD * MS_IN_DAY;

        for (const file of files) {
            const filePath = path.join(SOURCE_DIR, file);
            const stats = await fs.stat(filePath);

            if (!stats.isFile()) continue;

            await backupFile(filePath);
            await deleteIfOld(filePath, stats, cutoffTime);
        }
    } catch (err) {
        console.error(`Error during backup and cleanup: ${err.message}`);
        await logOperation(`Error: ${err.message}`);
    }
}

backupAndCleanup();
