const R = require('ramda')

function Multiset (entries) {
	this._indexed = R.compose(R.map(R.length), R.groupBy(R.toString))(entries)
	this._keys = R.uniq(entries)
}

function is_multiset (obj) {
	return R.is(Multiset, obj)
}

Multiset.prototype.elements = function () {
	return this._keys
}

Multiset.prototype.multiplicity = function (elt) {
	return this._indexed[R.toString(elt)] || 0
}

// true if this multiset is a subset of `otherMSet`
Multiset.prototype.subsetOf = function (otherMSet) {
	const is_mset = is_multiset(otherMSet)
	const is_array = R.isArrayLike(otherMSet)

	if (!is_mset && !is_array) {
		throw new Error('invalid argument, must be MSet or [nr]')
	}

	const superset = is_mset ? otherMSet : new Multiset(otherMSet)
	const missing = R.length(R.difference(this.elements(), superset.elements()))

	if (missing) {
		// cannot be subset if some elements are missing from `otherMSet`
		return false
	} else {
		function suffTokens (i) {
			return this.multiplicity(i) <= superset.multiplicity(i)
		}
		const allBigger = R.all(suffTokens, this.elements())
		return allBigger
	}
}

module.exports = Multiset
