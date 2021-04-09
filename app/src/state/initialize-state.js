const initializeRecoilState = (initialRecoilState, atoms) => ({set}) =>
    Object.keys(initialRecoilState).map((key) => {
        const value = initialRecoilState[key]
        const atom = atoms[key]
        set(atom, value)
    })

export { initializeRecoilState };
