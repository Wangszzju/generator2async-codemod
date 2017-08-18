class Foo {
  nonGenerator () {
    this.pass()
    if (this.pass()) {
      return
    }
    return 'foo'
  }

  * aGeneratorMethod () {
    yield this.pass()
    ;(yield this.pass()).another()
    this.another = {
      foo: yield this.pass(),
      * bar () {
        return yield this.pass()
      }
    }
    yield* this.another.pass()
    return new Foo()
  }

  async foo () {
    await this.pass()
    if (this.pass()) {
      return
    }
    return 'bar'
  }
}

function * aGeneratorFunction () {
  yield this.pass()
  ;(yield this.pass()).another()
  this.another = {
    foo: yield this.pass(),
    pass: yield this.foo(),
    * bar () {
      return yield this.pass()
    }
  }
  const _ = yield* this.another.pass()
  return new Foo()
}

function nonGenerator () {
  this.pass()
}

async function foo () {
  this.pass()
}
