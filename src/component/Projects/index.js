import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DOWNLOAD_PL_SUCCESS } from '../../action/types';

// Import ProjectCard
import ProjectCard from './ProjectCard';
// Import ProjectData
import { ProjectData } from './ProjectData';

const OurProjects = () => {
    const [productList, setProductList] = useState([]);
    const products = useSelector(state => {
        return state.getProductList.products;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if (typeof products === 'undefined' || products.length === 0) {
            dispatch({ type: DOWNLOAD_PL_SUCCESS, payload: ProjectData });
            setProductList(ProjectData);
        }
        else {
            setProductList(products);
        }
    }, [dispatch, products]);
    return (
        <>
            {/* Project-Grid Start */}
            <section id="project-grid" className="py100">
                <div className="container">
                    <div className="row">
                        {
                            productList.map((data, index) => (<ProjectCard data={data} key={index} />))
                        }
                    </div>
                </div>
            </section>
            {/* Project-Grid End */}
        </>
    )
}

export default OurProjects
