// Article Entity for Blog functionality
export class Article {
    constructor(data = {}) {
        this.id = data.id || Date.now().toString();
        this.title = data.title || '';
        this.summary = data.summary || '';
        this.content = data.content || '';
        this.author = data.author || '';
        this.category = data.category || '';
        this.image = data.image || '';
        this.created_date = data.created_date || new Date().toISOString();
    }

    // Mock method to simulate fetching articles (sorted by creation date)
    static async list(sortBy = '-created_date') {
        // For demonstration, return empty array
        // In a real app, this would fetch from an API or database
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([]);
            }, 500);
        });
    }

    // Method to save/create new article
    async save() {
        // Mock save operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this);
            }, 300);
        });
    }
}