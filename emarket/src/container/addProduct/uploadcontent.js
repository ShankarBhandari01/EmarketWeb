import { Component } from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
class AddItem extends Component {
    submitted = (e) => {
        e.preventDefault(); // prevents from reloading page
        toast('Product added !!! ', {
            position: toast.POSITION.BOTTOM_LEFT
        })
    }
    render() {

        return (
            <section className="Form my-4 mx-5 pt-5 pb-5">
                <div className="container">
                    <div className="row no-gutters shadow" style={{ borderRadius: '3px' }}>
                        < div className="col-lg-6">

                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTERcVFRUYGBcZGRobGRoZGRwbIRogIB0cGxwfGhscHyskGh0pIRsZKDUkKSwuMj8yHCE3PDcyOysxMi4BCwsLDw4PHRERHTYoIyk5MTs8PC4zMzMuNTExNjE5OTY2MTExMTIxMTEzNjExLjE5MTkxLjE0MTExMTExMTMxOf/AABEIALYBFQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xAA7EAACAQIEBAQDBgUEAgMAAAABAhEAAwQSITEFIkFRBhNhcTKBkUJiobHB8AcUI1LRFXKC4TOSorLx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EAC8RAAICAQQBAQcDBAMAAAAAAAABAhEDBBIhMUFRBRMiYYGR8LHB8RRCodEjMjP/2gAMAwEAAhEDEQA/AOzUpSgFKUoBSlKAUpSgPKUrDfuZRUJyUE5M9Ss+2cDc16rA7GtC9cEVr8KxQzsO4BH1j9fwrAvaEfeKD8lnu3ttEzSta5fIphcUHnoR+Na454SltXZBxaVm1SvK9q8iKUpQClKUBivXQilmIAG5JgCtHh3GbF641u24LqJKwQY2kSNRtqO4qr/xP40bVoojAMsFiYOrBsoy9dpnvl61z/C4lvONwmGOTMcucEGAco7kEn5Gs08+2VVwQc+TtbcVs5Lji4jLaJFwqwOQgSQ0bGCNPWo6z4vwTWluG+qhjENow1jmXdRP2jptrXFeN8ay3Ci86DMCrHMGnRSZOsCRr0+laFjFC4qWfKPNcMMhYgBiWhcpUaBm5TprMCTOvGlKKYUmfpZniPUx+E/pX3XEcF4iu4i0y3MS+a2WNuToeaAHMDMIBgtJ296uv8OPED3LFxcSxHlQyvc0LIZ3J+IqRvvqKjXNFzxtRUi9UqK4Px7D4ostm6HZfiEFSB3hgCR6ipWhAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgPKUrDiXyqTUZSUU2z1K+DHir8CAdep7VAcYxzWgH+xPMekHqY21jWpMma0+JgRBr57WZ5TV3wa8UEnVEY3EmusERSXInLtA7knQD1qR4Pg7toO10qWZpGUkhVAACyQJg5j/yNZeE8RF1SToRoR7fpW1icUoGpqnFjwqLnud/M9ySle1KiOxfF0DZSYadZ6e9QvFuJraR5ZTc3U+nSe2o29u9aHHsfaXEWjkd7hJBVdZQ9cvVhBg9s1SJuWWW21u2puFoQRBkkaGe0SZ2y17Bt1Nvv7lE3To2LXEry20uquZQoM5twBuVJnbpVuw+IV1UyAWAMTqJExVKtnyrlzzbiwQCiKIC9CC082uu3WveFccHngE8isqhRvzAAH1EnbTb5Vt02ocJU+b+fRSX2leCva7YPDUJe49bJZUZSwCHcaBieZh9kAKTrX34gx+RSq7xqe07D5/l71zK9xxrz3fhAeASoPNBygkzsFXYQOY6bzh1Gp2NpeCEp0bPiu42JxEoDndFUiCA4GobYlOXWR0G3eu8Q4tZw7MFRhoQhMw4MAnmkQZfQRHL89vG44BcssMplWBIPtIIMH0qF4q9u+y21GQF11B1je5BM6hQ1U4X7x2/JXH4jB4V4QcYzu1sXMxGUEty6kE8pG+g+ncVm43wd8OwUQFzybYuSJ21aQUB0k+ldRsYUYPDi3YRVQAl2bRVnQDzHcHQEyRJJ7VSvE3C8SzFmRGViSCrcvQSCHiNdzFdKMmujYoxaqilYW5ctQ4SFJ9zuep36a1OXeKh18wQHgBgAAGgASQNOn61q4O49pjZBR7dx1DA6w3wqVYiVJJAkad6+OE8JF5rhD+WksBJmCu4aJyzMCQB61Jv0NGONfCT3g7jNqxxFbpbIgF0uF1kFYCKNyczLuekzpNdo4Fxmzi7eey4YAww6qd4YdK4GtgYV3uAgwhVleDII3AOuaDp8j72/+EFi5ZxxLkIt2wxCFtSQyEaRGgzxB2mve1ZRkxuLd9nYKUpXhSKUpQClKUApSlAKUpQClKUApSlAfNaXF3i2T21ivviOIyARuajL8H7UmJrDq8y2yglbovxY7akZLRgVocXfl0r4TiKiQWEjQio7jXE0yxmALaCT9foK+bnPdHajdDHJSPvhtklJBg6mfqfpWOxh8be1e2ltFYyxLKzqBuq6lT7/AE2qa8NsjSBBygH/ABU5cbSuho9HCWNzlzZRmzOM6SOJWb9tbt269x/NRSQLiyFGixyHMyywlQonbTQ1ZOL3ba2lIAtXWyFZBUsTG4IB69h8tqjvHOFW1xFmiEu21LQJls4WI78ikdzU3gfD2ML2sQ1xHK6+Uy5WUGRqRpngg6jcRI3q2WNy4Xj8pGadt2R2DFxUuPAZtCpuEF9jygIDCzuNNTtUlcvpaC2rB55BYscu+5bKDBnb6VocT4j/AC957ly2bVwlVDOph/i2jcc3TXTtFfHG8Ytt7d2/ldWBVVQkjUZpnqNPx9az1Lik0Vui9eF+IB7UO6l8xEZtekb79axYvxhhVtu63VYp0E6mY0mMwHWK57wrFBzcVl8uwXOkx9iSAdTB0EDbOI2qy4S6QHd1HlW0jKAIkAkhBA5QsCdN9oAjoY9TKlH0KnPngiMbxW5iBeFpg2QM+kS3KGn1MN8jFVCw757aWk8zkzOF3JbUAdzA29TV1w+LLYxQcsNhxyhVUIwYMV9eW4NJ+ydtaqmG4K+HvYhy+VLbkJCF+UKXBYg6DKUHUkz2qOxO2+f3IbXRX+JcQzHLBGuxGs9o6VNYDwo/lC87KrxKrmMqPvAaD97Vo4/BXbuW8IkGdRlk/wDKK8u8VxYQqbbR1I1HzI6VZLFlUUsao9XHRY8Pxh7itMXRmy3bDNBOoGe20frppoQaiOI4a3bveWlxsxnKhVVM9QWLFRG0zuJio7huAe5b8zMV1JidzrM/XasdtVN5jinYKFOXKJzHsSZyiBuAT29d2LJF/DfJrjm9DzEYXLbuv5gW4hEWwCTBIhp6dgddflWWzwnnZhchtHEqQXnm0zR3JgxIB1O1a+AFhvNDoXLctthLeiwI+In8/Ws+Ha5evk3GVfLRZW6N42ABmNvl+FaEkeuTuz3h164oa44803E0ZSxa2MxWW2yk9N9D7VMeEOKG3de8GIKDIrRJTMCCMp0UkgS0HQEabmExHF7r+ZdGULGVknfVQYkHTQGPSd6ycOwrsWFzIv2iEjmzHNqy6NvvJ0EdKjtbfBfB71tfZ3nwZj7uIwiXLywxLAGMudQxCtHSR8juNDU5VW/hned8CuaSA7hCeqg6fKZHyq00apmSaqTR7SlK8IilKUApSlAKUpQClKUApSlAR3GbJZJAkrrHp1qvti2KMyAsF0JH71PtVmx2KFtZOpOgHc1R/EXEbjjJbyrmJkKcpHU6/mQN65etxxlK0+aOjooznxXHzMT8PF+y2IBEa5Wic0TMemlYvCHDv6hutbATLoTqc0+pOkbSO3pWz4Y4q5sLnthGzMuQmCNSdoiOsidCO9TDY4lIr5nNmljcoP8AKLZxm5uuv2MHEsSbLebbUM6ghlmA6SCQTsCNwfQjYms9vxAHGlq8DEhSjCfZmhT9awX8IblqFIDNEyY0JEiegI02PtWTBo1q2UuOGiAumqqBABP2veB8969w66WPBtT8lTjFzpqylYm3jMViXdrT25ORc9shba5WB1YQx1+Id9DVtXA3/wCmz4gjIQYSdCFj0DCddR6aivL3EiZXttWThGLF1SJ1XQ/of32Ne5faGargqROWl43NElfS3iUIYSNQfQ9d/wAqo9/w3as33Y2BfCkwucgLImfKiPkZHYCrZh5t3Drytv6EbH2/exNbmLseYpXTXuAfz2+X5V0dNq/eRUr58mTNgV8FVXi6hhbOGuW83MgRFZdFGgCkQRE5YnStO9jAEdjdWWBGQA66akqo0676amtbxDwt8LcRrnmPhy4MjU2yNRPcTqAJMgRtXrJczhgUuW3iGSQSIOYMwg9II31jXetM1uaZilFojcJiGuDkk3Vh0jUtlB5S0aAyRvEH0rB4ssYy4zXLcBGGV7QYtnC/dKxPpPQEQdBYSqq5ygBz8TQBoJI2EQOms6jqK8umNSZnQekwB9f0+VbcMFHlkUc5wvErpssym4Mjw6iSFDDlOVtAJVwflX2mJxN22WRM6f3QPpvv6VbOKWlyuQsMyy2UfFA0zQObf1Og1qscPxnlg25AWZA9z/kn61dPNKK+FHrN7wpjUyFbs9RHUGdeUxrvoai/EBBBjVfr+NbnEOE3gy3fKuKpIzHIwlfUbj3PT2qeu27d61lVQPbYfvSsryJNSQXqVPhuNK4W4F8oLmEqRzDlGqmJiVPWPetKxh7l5mzB2ZpyhAWZjoToJJEHcafWpLEYFcNdDlA6iQbbfC09dxA/febd4Sxb4ayz20trcuFouOpJQKUUJ6n42MdGX5dOGRTipRNMIufRTrfA8VbYPcw1y2ms5rbAaD4tQYPWe4q2+HvC1tkXENdLKYY2pOXvlLq0nfcH37VP8X4sL9oeYozxytsA24RiDsQVhhBBBJkaVUTjbqSLhZAxHOzTAVucNl0dsjf2gnKKnGaT5NGNKH/Y7dwK4jWENtQqRAUaBY0gR2INSFRXhZLa4W2LTZreWVb+6SSTHTWdKlaPvgySq+D2lKV4eClKUApSlAKUpQClKUApSlAQfie6LaC4dlmT2mP8Vz7F27N9s6XnW4SSuUjcDbUaHUfhXR/EeOtWrJN4BlbTLE5vSDXG8cLDJdAU2na5IVrrNlXKIykjn1kRvqPSsOfGt26zu+y03Bunx58G1wriNxS1+64aALYQToFO+p1aYnrr1G0sOOqMrOMquAVk9DsWHSai0wWH/wBOVFLJiMue4zMRlJ1+FjlYEEAQJ1FYLvCG/lLd5rwAVUKgKC/fLOgXKCsnm1nQdefm0WLK25d9cG1e6k6cWm/Uu2B4krrysDHKYOxEaHtpH1r6xd4xJNVvwtxBb9422UrCQHIhmZTO+xAzNpruNZrN4rvtasOEYsAsO+nLPYg+o+tcqfsqSn8LVGeUIxntM2EuPeuOttcxBgsdAumxP6U4dgcVh7wuNkdMsOFJJImZykCSPSeveprwfYS1hbajWUVie5YSSe+9bdySSCNOhnf0jvVMsijcYpNdU+yuU7bj4M9uLiggzI0jqK8t3vLgMdJABOw7D/G3bffW4Vg7yXcjLCNJUyDl6kQD1P51uYtV5lPMIIIIEEHfTYioQ0+fC9yVr9f4McnG6sy4hgbZmSPQ/PWOlV7H4JbNsG2g5sxbXczO/rm7dKmMNAthZJAnrPUkanffr2rSxLzbj+wz8hIP4GflW73ydNehRLFbplYxF3KYz6ndRplgMdep/wCq1hf0JaZ0309I7T6f5qQ4vay3luiAGUq/TUQwPzAIJ7LULjMYB1mYI7Df6eldrT5VNWYcmNwdDGMdc6kKBJjTbYEzoZ3Py9Kw+COGZr1y6QHYODbBAhSRJY9Z1j5T1qPxeNJBJHKI6T7x3/ftWz4T4u2HuNdYf07jKF7q0Now9crGfSp6jc8b2kYnTMThclk53zMZLHtPSuVY3GixiCo2aSPcHX8/zq08R8ShgdQB71DcJ4QmLvC/eT+ipKrOmdjv8hpWDHt3W00qD7K5x7G+Yp66Gpbh2LyW0UkNtsdJ6gHTpy6TMSOk7njTwfbtjNZYqNJEmCDvMyQR6aafOq7heHXVYW7QDsQx11Oi5iBOkQu1dPTTgotI04Mihdlj4piFuZrikZNssHQjWOuukjvJ7VE4+7Lu7L/40IYnXmPIs6bkmfeahP5tR0aW1EAaDpM/lX1cxLNaCnRSZjqSBEk/vc960xVs9yZUdf8A4EX3bCXlYkot0ZPQlQWA/A/Ouj1Vf4W8LOH4ZZDCHuA3W93MrPqEyD5VaqsKV0e0pSh6KUpQClKUApSlAKUpQClKUBS/Hg87IiGcssD0zKyhhOxMEjrr865/4odPiIyvoYCxlI1EAaCuz4vBI6BYgL8MQMvsNo9KpnHPA3nMXe+FUasQkmB2EwPx9qy5YT3Wujtez9djxQ2z4r9zmK3L15rd12VVU5EZhJMAyAAJI1O/Ugdak+IWmazmNxlbSG5SmpM5gpzAAfaIPtFTOK4ELKtbRM4AkBiGdRuWaABLHTKNjVU/0262dbrlFBllymSJnqRO9Z093TNEVPNklJWlXDTSLJ/D3C+c/O0pabliRmZhJZu+jaA99dhVy8S4ZUt5dChBBG4M7yDvXNeGcU/09pD+YlzUgRKwAJA9e3pXQOFYe5j7Cs7MiMJUDRiOhM/CD7T7VGcO0l30Ry7ozUskuuyucN8QC2RZCkhV5SoJAUaQYkgARr2I+d34fbRrCX3YyQrgzAWYIn8Jmoj/AE1MHcTyllQcpkyzEyAST7xGgqZ44iiwbaaMw3k6e3b0rmPBijNyrlevqZ9VkUktnFlX8Q+NZISySLmoIyzE9T26Q22s61L4FbrWkflYEDZpOnuomoDC8ItEE21ydDEmXU6sZ+8CY21qe4ViCvKdI3H73HrUc2aEuIpmaMWl0b1sdeh3HY9Prt9Kw4lIObodD/3+VSWQMNtxBHeqnxTji2bzWbttmMAoyRLA6AFSRrOmh6bVmnhlLiJKPLMPHspsqplj5qhQupYw23rWC/4WuXbQKRJ1AEEAd5+1+W9S2M8LXb6h/MFrQ8mXORPdgwAMaaT8+sxwTECzbFtyBdRVV1B/tEAjqVIE/wDc1vwYpRS3OiM2n1yc6u+E79vmbUgggiAyxGqjZgP7CKleDcMVGZLihzntnKBOQ20tZiP9rXcw7/WrD4i4vbQLnYIWYKuaNZIGg3Pf5VpcOvjkdx/UKHOOhKMlm9HsoB+YrYpSfngx5opPhUVHxDwY2rN1yoJtKqQIOcswVWB7FMzfI1YuCcbtiwtuB5YiARtp+Brd8WYcm0J2V0837yAlCT7LdLf8vSoPiWEuXC9xlVFRSAwME5d56GPX9KpzSfFd8me6PnxFxVWtu32FUgepOiqPUkgRUR4OwNwt5jQmmVC5HKp1uPlEsIEDYbkEgGaW8FcGVr5JaeRGgBZ20Gkxv7xtX3bxJY5EPKyFrjncjZBHRfiMenvOjHDbFr1PLI/EcEtHz77uwUXbgQdWE8o/MkjbQbmsvgLw+cfjFUr/AErZDXf9o2X3bb/2PSo+5mv3RZtAuzucqjqWM/QbdtzXdvBHAFwOFW0ILnmuN/cx3j0Gw/7rp447Y8koqydVYEV90pUiwUpSgFKUoBSlKAUpSgFKUoBSlKA8qM8Rq5w1zJq4EqB1iDHzipOvDXjVqj2MtslL0OMpx+M+c/F8Q9fUfXSorFE3yXL5YUjSAWE6bg9/lXTvFXhDCXQ95wyNBLMkcx/2kQSTVL4xwE2lAwrFiqwPMIzGd4OgkSQBt61iyQUPJ9Pg12PJF7I0/wDH3KjisPYSw10SzQSnMRE9Zmf/ANrsvCuJ2jZRkIKMilSD0Irmvh3gyozNdtxLHLbJzhRprt3Aj2nerBxbCsgmzcCgCehU99CJH4dd6pyZH/b4KJ4nmpyVOuvmvmb/AIv4gossU1bZANy3T8az4bH+fbV4gsokf2kfED7NNUBOJgYgpinJWJUgfCe4WdetZ+C+Ils4rKnNac80k+wYTs0QI7Adqx5cDkm/PZ7PTfBS7X5RbmXymLHRDqx/t+8fu9+2/eJS5g84BGhGxH71HpWzhBbuoCIKnY/vY1GYq8cAyyC2GZgumpsk6CB1tk6R9kkRIMLzseJvh/n5/kwOTuvJL8Kun4HEMPxHdT1FRvjLw/5+S9bH9ayyukfbCsGKHprGnY+5qcIS6gZSO6sP3t3FYcDxFbgdCQLls5XWfhO4/wCJBBB6g9DIGzH8H0Kbd2e8O4hbKAqwII09q0TbsYjElWhwEkrO/MApP/zA+dRf8jbOJdSWRm5xlMCTObQ6STOvWa18Tw04a4b9ti7RDAk869p7g7f915/WxtRkaY6eL6fLRM8Z4BhGs3EFpBnB1AgjtrvNQnBlBtFWMlbrzOmYBEt3j/6XGeO61tvir922rCxcWR9sqCPcBp/Co/w/w+5dNshyjW8ZduMGUywa0oKR2JJ7xB7VqxZVOTVr6GPNiaiTGJtm5hsj8zNbuWz94pnB+ZAufMCqeqXM1tbnOlzKG9LltlDgDtcUq49M1WvHWr1tCUPmMl1WtqRGUKXZgT1JFwCese5qqtx+6r5VRSolkNyFNuMoh+8FyB7kbbXVfBinBrs28eBdxctr5Vst820Hz0Y/SqjxO81y+9qypZmfIFX7pKqIHXf61bvDWFuYu5ltu2ZlLXbzLmg6lcqmARnbQaLp1E1efB/g3D4ASgNy4d7lyC3rHRR7a9ya1aWHbZ5GJo/w48GrgbfmXIbEOOY75B/av6n9N7tSlbCwUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFeV7SgNbG4ZLqFHWVMSNehkbeoFUfxejYRsyo3laQRJA9GOp76mugV8sKryYo5FyX6fUPDK6tehxG/x1HcsrBGERmMAjsCeoPeJn0rHiuOghQ/MqmYmJ7yw+f4VYv4m3MOt9Ue2AApZsqqC7H4QWiYEHTTf2I5/klQRZUK2mds0A7mDmidNu1YpwjGVH0+HJGWNTlS3dJv9D24bWNx+gIt9tdOoEnoNas/GOHWLa5QBljRoif8VXlwXkur2j5geQIEEnqCPskflXvGMLiWUZwcukwdQPb/ABVeWSbSbovw4fdK27fP19PsS/hzimMEC0qkTl5iecewG/Sasg44b/8AReywuEaLmBTf4s4100MZf81r8NdfJtIjZVkZjHwnuI6RGp7Go3xJjGwl9XBUlWgsv2hr06T2rJLHGTpIzZMEJylapq39i88Q5Je2wQ7lfst7jpp1EGoVOB3MTfGKd2sMFCotloYgag3GYEGZ+GNoBJjSGxXilLqFlBKgqHIB5ZPWfnV6w2MC6gisOpyzxTXhO7Zz8uBwiuLZXsVwu5buG4bru3XNAMfdKgAe0AVvcExy33JXVUgfMifyis3EsUrTBqgeGOKeRi8SNfLdyZAJClSQT7an6A7TWaOKWeE3249fPn/RNJyhVcnWHGhEaAaHvUHisb5FwXIEZgpJ0gHSQfeBXynFSy6GfUVE8dw/n2jbmJIJI9NQPXWPpUsUqyxm1SRSsLpxZP4/iaZSxYBfz9B3NUTB8HuYjFi35TEgBiWnIC0ksenpJHTTerRw1QlpRcSCYI037EHt61ceAYYpaObTMZjtoBr66V9Fgi5s5ueKujU8J8C/lUbMwZ2IzECAANgs69TJO/oAAJ+lK6MYqKpFCVHtKUqQFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAV5XtKAoX8TuHWiFvXEfKsKzowGhbRXBB5ZPxRpJ1GlULFYx7p8u2gWyijQAkAt8OYydT3PtXc79lXUqyhlIggiQQdwQdxVdxngjBuIVDb3ny2KzPfeRpWXLp98rRv0+fDSWe3XXPC+hzXhWZbxtlRCKzjLDDUqCSV0Ajb51J8bx63F0XKQvNywBG1WHxZwKzhMA4tWyozKxZWOYsDKszbmD07muZ3Ldx253YqSJBYkb9p1rLl06UuWfRaXN/VXliunX4j4wZv+W7IwKq0Rm11kgx1XTf2rWF5r5XNcIueYAOoUdWbv0/ZqzNhCth/LYQx1IAWBrooOsfSqgl0s3lKESHXOxmWknUkCYBjQA7ipqK8DU5JRS826Je7g0tOqs5dWaWZdQ3XVR++9bdnxIbLiyTntrGV1aCB0noRHzrQbh93P5qoURDqQ+bmieXX1Gk9a++a8fNyW11ZXGmZ9ZJy7Zp6jtt3pnjhNfHyJvfHaS/EuPs1pvLBViSgYkHpJKQSNuutOC21s2CSBGXXSdPbqa+2wfnXQqjlEKPaAzH/AOo+dbWItCQnRY+Z6D9fp2rNUIrZBcEVFRNnwq9u5aRwMriQyncEE6H5R+FTFuyCcqCST+JqV8I+G1t22e6i5ny6EaqBMa7gmT+FWTC4G3bMqoB79fqakvZUpy3N0n4OLm1sVJpctefB7gcPktop3VQPn1rapXtdxJJUjlt27FKUqR4KUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUBq4/CLetsjiVYQRXPOJ/w9uKxaxcETs0g/XWul0qE8an2adPq8unf/ABuv0OI8c8P4nDqGusERmyhpZtd4ORTHXeKreDwB53OgVlV5EmJhpXroR/7Cv0PxDA27yNbuKGRhBU9f8H1Gtcz8T+EnwhL281ywfiB1a2Pvx8SRIzdNCdprPPDtXwnZ03tKOoahnr7cfyU3NdtlrFs3GbMWABzBl01IjaANfaa3fD9lnLG4p/pKYBA1ZmJAHfmLH51rYgmCLbFXT/xtqCy9UPqp/elbXB8QSzop8y4DMzAMLuzH7xb117Css18Lo6WWO18E7wQ5Ud99fLX1MkuR7sQP+NXPwl4e8uL10c51VT9n1P3vyrS8CcHGRHYSqDlkfE5Ms0ehJ+c9qvEVZpdOv/SXno4Ov1btwh9f9HoFe0pXROSKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUAr5Ir6pQHKf4l+GBZb+ZsQoY8w6Kw2PoD9OmxEV7wrw9b2Kti4TbztkaFBGaCVGugJysAdRouhmu34qwlxSjqGVhDAiQR61V/CfDlw+OxdlUAWLVy3/tYuY9lfMB6AVnliTl8mdbD7Qn7iUG+UuC04WwttAiiAoAA9qzUr2tByW7FKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoDysPkrnzwMxWCesAkgfUn6mlKAz0pSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA//2Q==' alt="Loading Image..." className="img-fluid" style={{ marginTop: '100px' }} />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="font-weight-bold py-4" style={{ color: "#a018a0" }}>Add Product</h1>
                            <h5 style={{ color: "black", fontSize: "18px" }}>Fill all the details of Your Product</h5>
                            <form className="py-4">
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Title</label>
                                        <input type="text" className="form-control"
                                            id="heading"
                                            name="title"
                                            placeholder="Write title"
                                        />
                                    </div>
                                    <hr />

                                </div>

                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="content">Description</label>
                                        <textarea type="textarea" className="form-control"
                                            id="content_description"
                                            name="description"
                                            placeholder="Write decription"
                                            required />
                                    </div>
                                </div>

                                <hr />
                                <div className="form-row">
                                    <div className="col-lg-5">
                                        <label htmlFor="categories">Categories  &nbsp;&nbsp;&nbsp;</label>
                                        <select className="form-control" name="Categories">
                                            <option selected>Select Categories </option>
                                            <option value="Catagory1">Catagory1</option>
                                            <option value="Catagory2">Catagory2</option>
                                            <option value="Catagory3">Catagory3</option>
                                            <option value="Catagory4">Catagory4</option>
                                            <option value="Catagory5 ">Catagory5</option>
                                            <option value="Catagory6">Catagory6</option>
                                        </select>
                                    </div>
                                    <hr />

                                    <div className="col-lg-5">
                                        <label htmlFor="fullname">Cost</label>

                                        <input type="number" className="form-control w-100" min="0" step="1" name="Price" placeholder="value of your content." required />
                                        NPR
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-7 py-4">
                                    <button style={{ backgroundColor: "#51227F", color: "#FFFFFF", fontWeight: "bold", marginTop: "5px" }} id="UploadContent" type="submit" onClick={this.submitted} className="btn btn-primary"> Upload <FaRegHandPointRight /> </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>


            </section >


        )
    }
}
export default AddItem


















