describe('Buka Test Page', () => {
    it('passes', () => {
      cy.visit('localhost/RestoUAS')
    })
  })

  describe('Login Sebagai Admin untuk melakukan Aksi Update Pesanan', () => {
    it('passes', () => {
      cy.get('#2login').click()
    })
  })

  describe('Isi login', () => {
    it('passes', () => {
        cy.get('[type="text"]').type('administrator')
        cy.get('[type="Password"]').type('ony123')
        cy.get('[type="submit"]').click()
    })
  })

  describe('Buka menu pada halaman Admin', () => {
    it('passes', () => {
        cy.get(':nth-child(3) > .nav-link').click({force: true})
    })
  })

  describe('1. Tambah menu melalui halaman admin dengan mengisikan kategori', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
    })
  })

  describe('2. Tambah menu melalui halaman admin dengan mengisikan kategori dan nama', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#nama_masakan').clear({force: true})
    })
  })

  describe('3. Tambah menu melalui halaman admin dengan mengisikan kategori, nama dan harga', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('#harga').type('15000', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#nama_masakan').clear({force: true})
        cy.get('#harga').clear({force: true})
    })
  })
  
  describe('4. Tambah menu melalui halaman admin dengan mengisikan kategori, nama, harga dan ketersediaan', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('#harga').type('15000', {force: true})
        cy.get('#status').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
        // cy.get('#nama_masakan').clear({force: true})
        // cy.get('#harga').clear({force: true})
        // cy.get('#status').clear({force: true})

    })
  })

  
  