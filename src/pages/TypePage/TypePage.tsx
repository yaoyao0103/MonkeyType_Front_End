import React from 'react'
import Outer from '../../components/Outer/Outer'
import Navbar from '../../components/Navbar/Navbar'
import TestConfig from '../../components/TestConfig/TestConfig'
import TypeBlock from '../../components/TypeBlock/TypeBlock'

type Props = {}

// interface languageGroup {
//   name: string;
//   lauguages: string[];
// }

// interface languageGroups extends Array<languageGroup> {}

const TypePage = (props: Props) => {
    return (
        <Outer>
          <Navbar />
          <TestConfig />
          <TypeBlock />
        </Outer>
    )
}

export default TypePage