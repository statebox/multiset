const test = require('ava')
const jsc = require('jsverify')
const { check } = require('ava-jsverify')

var R = require('ramda')
var MSet = require('../multiset.js')

test('basic multiset functions', function (t) {
    var mset = [0,1,1,2,3,3,3,4]

    var s = new MSet(mset)
    t.pass('succesfully created a multiset instance')

    t.deepEqual(s.elements(), [0,1,2,3,4], 'should be right elements')
    t.is(s.multiplicity(0), 1, 'should be right multiplicity transitions')
    t.is(s.multiplicity(1), 2, 'should be right multiplicity transitions')
    t.is(s.multiplicity(2), 1, 'should be right multiplicity transitions')
    t.is(s.multiplicity(3), 3, 'should be right multiplicity transitions')
    t.is(s.multiplicity(4), 1, 'should be right multiplicity transitions')
})

test('test subset', function (t) {
    const nrs = [0,1,1,2,3,3,3,4,5,6,7,0,0,1,2,3]
    const mset0 = new MSet([0,1,1,2,3,3,3,4])
    const mset1 = new MSet(nrs)
    const mset2 = new MSet([0,1,1,2,3,3,3])
    t.pass('succesfully create the instances')
    t.is(mset0.subsetOf(mset1), true, 'should be subsets')
    t.is(mset0.subsetOf(nrs), true, 'should be subsets')
    t.is(mset0.subsetOf(mset2), false, 'should not be subsets')
})

test('readme contents', function (t) {
    const mset = new MSet([0,0,1,1,1,2,3])
    t.deepEqual(mset.elements(), [0,1,2,3], 'should have right elements')
    t.is(mset.multiplicity(0), 2, 'should have right multiplicity')
    t.is(mset.multiplicity(1), 3, 'should have right multiplicity')
    t.is(mset.multiplicity(2), 1, 'should have right multiplicity')
    t.is(mset.multiplicity(3), 1, 'should have right multiplicity')
    t.is(mset.multiplicity(4), 0, 'should have right multiplicity')

	mset.subsetOf([0,0,0,1,1,1,1,2,3,4]) //=> true

	const a = new MSet([0,1,1])
	const b = new MSet([0,1,2])
	const c = new MSet([0,1,1,2])

	t.true(a.subsetOf(a)) //=> true
	t.true(a.subsetOf(c)) //=> true
	t.true(b.subsetOf(c)) //=> true

	t.false(a.subsetOf(b)) //=> false
	t.false(b.subsetOf(a)) //=> false
})
