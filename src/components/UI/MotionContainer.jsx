import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export const MotionContainer = ({ children, delay = 0 }) => (
	<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay }}>
		{children}
	</motion.div>
)

export const OpacityMotionContainer = ({ children }) => (
	<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
		{children}
	</motion.div>
)

MotionContainer.propTypes = {
	children: PropTypes.element,
	delay: PropTypes.number,
}

OpacityMotionContainer.propTypes = {
	children: PropTypes.element,
	delay: PropTypes.number,
}
