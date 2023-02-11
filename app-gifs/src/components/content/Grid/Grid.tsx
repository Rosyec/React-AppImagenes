import { useFetchImage } from '../../../hooks/useFetchImage';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { GridItem } from '../../export-data';
import '../Grid/Grid.css'
import { useState } from 'react';

export const Grid = ({ category }: Props) => {

    const [page, setPage] = useState(1);
    const { imgs, isLoading } = useFetchImage(category, page);
    const pagination: number[] = [1, 2, 3, 4, 5];

    const onPage = ( page: number ) => {
        setPage(page);
    }

    const onPrevius = () => {
        if (page !== pagination[0]) {
            setPage( page - 1 );
        }
    }

    const onNext = () => {
        if (page !== pagination[4]) {
            setPage( page + 1 );
        }
    }

    return (
        <>
            {
                isLoading &&
                <div>
                    <span className="loader"></span>
                    <h1 className='display-5 text-secondary'>Cargando</h1>
                </div>
            }
            {
                imgs.map((img) => (
                    <GridItem key={img.id} {...img}></GridItem>
                ))
            }
            <div className="col d-flex justify-content-center my-5">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={ page !== pagination[0] ? 'page-item' : 'page-item disabled' }>
                            <a className="page-link" onClick={ onPrevius } href="#">Previous</a>
                        </li>
                        { pagination.map( (item) => (
                            <li key={item} className={ item === page ? 'page-item active' : 'page-item' } aria-current="page"><a onClick={ () => onPage(item) } className="page-link" > { item } </a></li>
                        ) ) }
                        <li className={ page !== pagination[4] ? 'page-item' : 'page-item disabled' }>
                            <a className="page-link" onClick={ onNext } href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

interface Props {
    category: string
}
