// Motivation Quotes
const motivationQuotes = [
    "Every task completed is progress made. Keep going!",
    "The future belongs to those who organize their present.",
    "Small tasks, big victories. You've got this!",
    "Organization is the bridge between dreams and reality.",
    "Master your tasks, master your life.",
    "Done is better than perfect. Start now!",
    "Your tasks are stepping stones to success.",
    "Consistent action beats perfect planning.",
    "Track your wins. Celebrate your progress.",
    "A clear list is a clear mind."
];

// Todo App Class
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
        this.displayMotivation();
    }

    setupEventListeners() {
        // Add button
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        
        // Enter key
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Action buttons
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAll').addEventListener('click', () => this.clearAll());
    }

    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (!text) {
            this.showNotification('Please enter a task!');
            return;
        }

        if (text.length > 200) {
            this.showNotification('Task is too long (max 200 characters)');
            return;
        }

        // Determine priority based on keywords
        let priority = 'low';
        if (text.toLowerCase().includes('urgent') || text.toLowerCase().includes('asap')) {
            priority = 'high';
        } else if (text.toLowerCase().includes('important')) {
            priority = 'medium';
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: new Date().toLocaleDateString()
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.render();
        input.value = '';
        input.focus();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            this.showNotification('No completed tasks to clear');
            return;
        }

        if (confirm(`Clear ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showNotification('Completed tasks cleared!');
        }
    }

    clearAll() {
        if (this.todos.length === 0) {
            this.showNotification('No tasks to clear');
            return;
        }

        if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone.')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
            this.showNotification('All tasks deleted!');
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'completed':
                return this.todos.filter(t => t.completed);
            case 'active':
                return this.todos.filter(t => !t.completed);
            default:
                return this.todos;
        }
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const remaining = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('remainingTasks').textContent = remaining;
    }

    render() {
        const list = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        list.innerHTML = '';

        if (filteredTodos.length === 0) {
            list.style.display = 'none';
            emptyState.style.display = 'flex';
        } else {
            list.style.display = 'block';
            emptyState.style.display = 'none';

            filteredTodos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="todo-checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        onchange="app.toggleTodo(${todo.id})"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <span class="todo-priority ${todo.priority}">${todo.priority}</span>
                    <span class="todo-date">${todo.createdAt}</span>
                    <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
                `;
                list.appendChild(li);
            });
        }

        this.updateStats();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    displayMotivation() {
        const quote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
        document.getElementById('motivationQuote').textContent = `💡 ${quote}`;
    }

    showNotification(message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 10px 30px rgba(14, 165, 233, 0.4);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                this.todos = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading todos from storage:', e);
                this.todos = [];
            }
        }
    }
}

// Initialize the app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);