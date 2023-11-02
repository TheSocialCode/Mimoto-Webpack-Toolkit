/**
 * Mimoto - The Social Code
 *
 * @author Sebastian Kersten (@supertaboo)
 */

class MimotoWebpackDoneNotification
{
    apply(compiler) {
        compiler.hooks.done.tap(
            'MimotoWebpackDoneNotification',
            (
                stats /* stats is passed as an argument when done hook is tapped.  */
            ) => {
                setTimeout(
                    () => {
                        console.log(
                            '\n-------------------------------------------------------------------------------------\n' +
                            '❤️  - Compile done! - ' + new Date().toString() + '\n'
                        );
                    },
                    100
                );
            }
        );
    }
}

module.exports = MimotoWebpackDoneNotification;