export class BaseEntity {
    static id = 0;

    constructor(name) {
        this.id = ++BaseEntity.id;
        this.name = name;
    }

    get displayName() {
        return `${this.id} - ${this.name}`;
    }
}