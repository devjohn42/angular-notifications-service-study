export class Content {
  private readonly content: string

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240
  }

  constructor(content: string) {
    const isContentLegnthValid = this.validateContentLength(content)

    if (!isContentLegnthValid) {
      throw new Error('Content length error.')
    }

    this.content = content
  }

  get value(): string {
    return this.content
  }
}
