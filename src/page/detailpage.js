import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MDBCardHeader, MDBRow, MDBCol, MDBCardImage, MDBTableHead, MDBTableBody, MDBTable } from 'mdbreact';
class Detail extends Component {
    render() {
        return (
            <div class="p-5 "style={{ fontSize: '20px'}}>
                <Container   style={{ paddingTop: 10}}>
                    <MDBCardHeader color= 'cyan darken-3'>
                        <h3 className="font-weight-bold" style={{ textAlign: 'center' }}>INFORMASI KAOS CUSTOM </h3>
                    </MDBCardHeader>
                    <h4 className="font-weight-bolder" style={{paddingTop: 10}}>jenis kaos oddi</h4>
                    <p>Bahan katun dengan serat halus dan tidak berbulu, nyaman dan adem saat dipakai, pola jahitan rantai sehingga kaos lebih awet. Porinto menyediakan dua pilihan bahan:</p>
                    <p>Combed 20s - Bahan kaos cukup tebal</p>
                    <p>Combed 30s - Bahan kaos lebih tipis</p>
                    <h4 className="font-weight-bolder">Kaos New States Apparel (Import)</h4>
                    <p>Bahan katun dengan serat halus, pola standard Asia tanpa jahitan samping (Built Up), nyaman dipakai, jahitan rantai pada bagian pundak. Kaos NSA menyediakan dua pilihan bahan:</p>
                    <p>Soft Tees - Ketebalan 30s, bahan kaos lebih tipis</p>
                    <p>Premium Cotton - Ketebalan 24s, bahan kaos cukup tebal (ketebalan diantara 20s dan 30s)</p>
                    <MDBCardHeader color='cyan darken-3'>
                        <h3 className="font-weight-bold" style={{ textAlign: 'center' }}>INFORMASI UKURAN KAOS CUTOM </h3>
                    </MDBCardHeader>
                    <MDBRow>
                        <MDBCol md='6'>
                            <h4 className="font-weight-bolder" style={{paddingTop: 10}}>Petunjuk Ukuran</h4>
                            <p>
                                Ukuran kaos Cotton Combed 20s mengikuti ukuran lokal, sedangkan New States Apparel mengikuti ukuran asian fit.

                                Detail ukuran bisa dilihat pada tabel di bawah ini.
                        </p>
                            <MDBTable>
                                <MDBTableHead className="font-weight-bolder" color='cyan darken-3'>
                                    <tr>
                                        <th>Ukuran</th>
                                        <th>Lebar</th>
                                        <th>Panjang</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>XS</td>
                                        <td>41cm</td>
                                        <td>62cm</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>44cm</td>
                                        <td>65cm</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>47cm</td>
                                        <td>68cm</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>50cm</td>
                                        <td>71cm</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>53cm</td>
                                        <td>73cm</td>
                                    </tr>
                                    <tr>
                                        <td>XXL</td>
                                        <td>56cm</td>
                                        <td>76cm</td>
                                    </tr>
                                    <tr>
                                        <td>3XL</td>
                                        <td>59cm</td>
                                        <td>79cm</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardImage src={require('../img/register2.png')} style={{ width: '100%',paddingTop: 100}}></MDBCardImage>
                        </MDBCol>
                    </MDBRow>
                    <MDBCardHeader  color='cyan darken-3'>
                        <h3 className="font-weight-bold" style={{ textAlign: 'center' }}>INFORMASI HARGA </h3>
                    </MDBCardHeader>
                    <MDBRow>
                        <MDBCol md='6'>
                            <p className="font-weight-bolder" style={{paddingTop: 10}}>Cotton Combed 20s, 24s dan 30s lengan pendek</p>
                            <p>*harga sudah termasuk kaos dan design</p>
                            <MDBTable>
                                <MDBTableHead className="font-weight-bolder" color='cyan darken-3'>
                                    <tr className="font-weight-bold">
                                        <th >Ukuran</th>
                                        <th>	Print A4 (21 x 29cm)</th>
                                        <th>	Print A3 (29 x 42cm)</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>XS</td>
                                        <td>IDR 59.000</td>
                                        <td>IDR 64.000</td>
                                    </tr> 
                                    <tr>
                                        <td>S</td>
                                        <td>IDR 62.000</td>
                                        <td>IDR 67.000</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>IDR 65.000</td>
                                        <td>IDR 70.000</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>IDR 68.000</td>
                                        <td>IDR 73.000</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>IDR 71.000</td>
                                        <td>IDR 76.000</td>
                                    </tr>
                                    <tr>
                                        <td>XXL</td>
                                        <td>IDR 74.000</td>
                                        <td>IDR 79.000</td>
                                    </tr>
                                    <tr>
                                        <td>3XL</td>
                                        <td>IDR 77.000</td>
                                        <td>IDR 82.000</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                        <MDBCol md='6'>
                            <p className="font-weight-bolder" style={{paddingTop: 10}}>Cotton Combed 20s, 24s dan 30s lengan panjang</p>
                            <p>*harga sudah termasuk kaos dan design</p>
                            <MDBTable>
                                <MDBTableHead className="font-weight-bolder" color='cyan darken-3'>
                                    <tr>
                                        <th>Ukuran</th>
                                        <th>	Print A4 (21 x 29cm)</th>
                                        <th>	Print A3 (29 x 42cm)</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>XS</td>
                                        <td>IDR 69.000</td>
                                        <td>IDR 74.000</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>IDR 72.000	</td>
                                        <td>IDR 77.000</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>IDR 75.000</td>
                                        <td>IDR 80.000</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>IDR 78.000</td>
                                        <td>IDR 83.000</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>IDR 81.000</td>
                                        <td>IDR 86.000</td>
                                    </tr>
                                    <tr>
                                        <td>XXL</td>
                                        <td>IDR 84.000</td>
                                        <td>IDR 89.000</td>
                                    </tr>
                                    <tr>
                                        <td>3XL</td>
                                        <td>IDR 87.000</td>
                                        <td>IDR 92.000</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>

                </Container>
            </div>
        )
    }
}
export default Detail;