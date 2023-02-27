import type { FC } from 'react';

import { Category } from '@/redux/actions/study';
import { BadgeList, CategoryBadge } from './style';

interface CategoryBlockProps {
    // isAdmin: boolean;
    // id: string;
    categories: Array<Category>;
}

const CategoryBlock: FC<CategoryBlockProps> = ({
    /*  isAdmin, id, */ categories,
}) => {
    return (
        <BadgeList>
            {categories.map((cate) => (
                <CategoryBadge key={cate.id} value={cate.name} />
            ))}
            {/* {isAdmin && (
                <Provider value={{ id, categories }}>
                    <AdminEditCategory />
                </Provider>
            )} */}
        </BadgeList>
    );
};

export default CategoryBlock;
