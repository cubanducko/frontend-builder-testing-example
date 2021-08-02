export abstract class Builder<T> {
  public getInstance(): T {
    return { ...this.instance };
  }
  public with(options: Partial<T>): Builder<T> {
    const newBuilder = Object.create(this);
    newBuilder.instance = { ...this.instance, ...options };
    return newBuilder;
  }
  protected abstract instance: T;
}
