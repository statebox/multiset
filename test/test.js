var R = require('ramda')
var test = require('tape').test
var MSet = require('../multiset.js')

test('basic multiset functions', function (t) {
    var mset = [0,1,1,2,3,3,3,4]

    var s = new MSet(mset)
    t.pass('succesfully created a multiset instance')

    t.deepEqual(s.elements(), [0,1,2,3,4], 'should be right elements')
    t.equal(s.multiplicity(0), 1, 'should be right multiplicity transitions')
    t.equal(s.multiplicity(1), 2, 'should be right multiplicity transitions')
    t.equal(s.multiplicity(2), 1, 'should be right multiplicity transitions')
    t.equal(s.multiplicity(3), 3, 'should be right multiplicity transitions')
    t.equal(s.multiplicity(4), 1, 'should be right multiplicity transitions')
    t.end()
})

test('test subset', function (t) {
    const nrs = [0,1,1,2,3,3,3,4,5,6,7,0,0,1,2,3]
    const mset0 = new MSet([0,1,1,2,3,3,3,4])
    const mset1 = new MSet(nrs)
    const mset2 = new MSet([0,1,1,2,3,3,3])
    t.pass('succesfully create the instances')
    t.equal(mset0.subsetOf(mset1), true, 'should be subsets')
    t.equal(mset0.subsetOf(nrs), true, 'should be subsets')
    t.equal(mset0.subsetOf(mset2), false, 'should not be subsets')
    t.end()
})

test('readme contents', function (t) {
    const mset = new MSet([0,0,1,1,1,2,3])
    t.deepEqual(mset.elements(), [0,1,2,3], 'should have right elements')
    t.equal(mset.multiplicity(0), 2, 'should have right multiplicity')
    t.equal(mset.multiplicity(1), 3, 'should have right multiplicity')
    t.equal(mset.multiplicity(2), 1, 'should have right multiplicity')
    t.equal(mset.multiplicity(3), 1, 'should have right multiplicity')
    t.equal(mset.multiplicity(4), 0, 'should have right multiplicity')

	mset.subsetOf([0,0,0,1,1,1,1,2,3,4]) //=> true

	const a = new MSet([0,1,1])
	const b = new MSet([0,1,2])
	const c = new MSet([0,1,1,2])

	t.ok(a.subsetOf(a)) //=> true
	t.ok(a.subsetOf(c)) //=> true
	t.ok(b.subsetOf(c)) //=> true

	t.notOk(a.subsetOf(b)) //=> false
	t.notOk(b.subsetOf(a)) //=> false

	t.end()
})
