class Example {
  constructor(container) {
    this.container = container;
  }

  getTopNode() {
    const topNode = this.container.firstElementChild;

    return topNode;
  }

  getMidNode() {
    const topNode = this.getTopNode();
    const midNode = topNode.firstElementChild;

    return midNode;
  }

  getBottomNode() {
    const topNode = this.container.firstElementChild;
    const midNode = topNode.firstElementChild;
    const bottomNode = midNode.firstElementChild;

    return bottomNode;
  }

  getAllNodes() {
    const topNode = this.container.firstElementChild;
    const midNode = topNode.firstElementChild;
    const bottomNode = midNode.firstElementChild;

    return [topNode, midNode, bottomNode];
  }
}

export default Example;